import { config }  from '../config/testenv';
let serviceConfig = config.Service;

var rp = require('request-promise');

var url = serviceConfig.url;

class CampaignSDK { 

    getCampaigns() {
        return rp({method: 'GET',
               uri: `${url}`,
               json: true});
    }

    getCampaignStats(campaignId) {
        var uri = `${url}/${campaignId}/stats/apps`;
        return rp({method: 'GET',
                   uri: uri,
                   json: true});
    }

    updateCampaignBid(campaignId, appId, bid) {
        var uri = `${url}/${campaignId}/update_bid`;
        return rp({method: 'PUT',
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
