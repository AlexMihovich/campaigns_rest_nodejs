import { CampaignSDK } from '../SDK/campaign_sdk';
import { dbLog } from '../database/database';
import { logger } from '../logger/winston';


let campaignSDK = new CampaignSDK();

class CampaignService {

    getCampaigns() {
        // returns list of campaigns
        return campaignSDK.getCampaigns()
            .then((campaigns) => {
                return campaigns;
            })
            .catch(function(err) {
                logger.debug('error get_camaigns request!');
            });
    }

    getCampaignStats(campaignId) {
        // returns list of campaign's stats
        return campaignSDK.getCampaignStats(campaignId)
            .catch(function(err) {
                logger.debug('error get_camaign_stats request!');
            });
    }

    updateCampaignBid(campaignId, appId, bid) {
        // send PUT request and updatese remote data
        return campaignSDK.updateCampaignBid(campaignId, appId, bid);
    }

    validateCampaigns(campaignsList) {
        // filter list of campaigns, delete campaigns without ids 
        return campaignsList.filter((campaign) => {
            return !!campaign.id;
        });
    }

}

exports.CampaignService = CampaignService;