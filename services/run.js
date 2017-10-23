import { CampaignService } from './campaign_service';
import { LogService } from './log_service';
import { Log } from '../models/log';
import { logger } from '../logger/winston';


exports.runResearch = function(req, res) {

    let cam_service = new CampaignService();
    let log_service = new LogService();

    cam_service.getCampaigns()
        .then((campaigns) => {
            return cam_service.validateCampaigns(campaigns);
        })
        .then((validCampaigns) => {
            validCampaigns.forEach((campaign) => {
                getStatsFromApi(campaign);
            });
        });

    function getStatsFromApi(campaign) {
        return cam_service.getCampaignStats(campaign.id)
            .then((stats) => {
                if (!Array.isArray(stats)) {
                    logger.debug('Invalid request data');
                    throw new Error('Invalid request data!');
                }

                let filteredStats = stats.filter((stat) => {
                    return stat.impressions / stat.opportunities < 0.5;
                });
                return filteredStats;
            })
            .then((filteredStats) => {
                filteredStats.forEach((stat) => {
                    let old_bid = 1; // TODO fix after we got info
                    let new_bid = 2; // TODO fix after we got info
                    // service's not available (error!)
                    // cam_service.updateCampaignBid(campaign.id, stat.app_id, new_bid);
                    let current_date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
                    let new_log = new Log(campaign.id, stat.app_id, old_bid, new_bid, stat.impressions / stat.opportunities, current_date);
                    log_service.createLog(new_log);
                });
            })
            .catch((err) => {
                logger.debug('Invalid request data', err);
            });
    }

};