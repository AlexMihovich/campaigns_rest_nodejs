import { CampaignSDK } from '../SDK/campaign_sdk';
import { dbLog } from '../database/mysql';
import { logger } from '../logger/winston';


let campaignSDK = new CampaignSDK();

class CompaignService {

    getCampaigns() {
        // returns list of campaigns
        return campaignSDK.getCampaigns()
        .then( (campaigns) => {
            return campaigns;
        })
        .catch(function (err) {
            logger.debug('error get_camaigns request!');
        });
    }

    getCampaignStats(campaignId) {
        // returns list of campaign's stats
        return campaignSDK.getCampaignStats(campaignId)
        .then(function (stats) {
            return stats;
        })
        .catch(function (err) {
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
            if (campaign.id) {
                return true;
            }
            return false;
        });
    }

}

exports.CompaignService = CompaignService;