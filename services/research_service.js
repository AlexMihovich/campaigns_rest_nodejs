import { CampaignService } from './campaign_service';
import { LogService } from './log_service';
import { Log } from '../models/log';
import { logger } from '../logger/winston';
let Promise = require('bluebird');


exports.ResearchService = () => {
    let cam_service = new CampaignService();
    let log_service = new LogService();
    cam_service.getCampaigns()
        .then((campaigns) => {
            return cam_service.validateCampaigns(campaigns);
        })
        .then((validCampaigns) => {

            return Promise.map(validCampaigns, (campaign) => {
                getStatsFromApi(campaign);
            }, { concurrency: 1 });
        });

    function getStatsFromApi(campaign) {
        return cam_service.getCampaignStats(campaign.id)
            .then((stats) => {
                validateStat(stats);
                return filterStatsByRatio(stats);
            })
            .then((filteredStats) => {
                let current_date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
                let old_bid = 1; // TODO fix after we got info
                let new_bid = 2; // TODO fix after we got info
                Promise.map(filteredStats, (fstat) => {
                    let new_log = new Log(campaign.id, fstat.app_id, old_bid, new_bid, fstat.impressions / fstat.opportunities, current_date);
                    return log_service.createLog(new_log);
                });
            })
            .catch((err) => {
                logger.error('Invalid request data', err);
            });
    }

    function filterStatsByRatio(stats) {
        let filteredStats = stats.filter((stat) => {
            return stat.impressions / stat.opportunities < 0.5;
        });
        return filteredStats;
    }

    function validateStat(stats) {
        if (!Array.isArray(stats)) {
            logger.debug('Invalid request data');
            throw new Error('Invalid request data!');
        }
    }
};