import { config } from '../config/dev_env';
let serviceConfig = config.Service;

let rp = require('request-promise');

let url = serviceConfig.url;

class CampaignSDK {

    getCampaigns() {
        return rp({
            method: 'GET',
            uri: `${url}`,
            json: true
        });
    }

    getCampaignStats(campaignId) {
        let uri = `${url}/${campaignId}/stats/apps`;
        return rp({
            method: 'GET',
            uri: uri,
            json: true
        });
    }

    updateCampaignBid(campaignId, appId, bid) {
        let uri = `${url}/${campaignId}/update_bid`;
        return rp({
            method: 'PUT',
            uri: uri,
            json: true,
            body: {
                app_id: appId,
                bid: bid
            }
        });
    }

}

exports.CampaignSDK = CampaignSDK;