var rp = require('request-promise');

var url = 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns';

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
