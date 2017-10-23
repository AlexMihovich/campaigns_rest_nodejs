class Log {

    constructor(campaign_id, app_id, old_bid, new_bid, ratio, created_at) {
        this.campaign_id = campaign_id;
        this.app_id = app_id;
        this.old_bid = old_bid;
        this.new_bid = new_bid;
        this.ratio = ratio;
        this.created_at = created_at;
    }

}

exports.Log = Log;