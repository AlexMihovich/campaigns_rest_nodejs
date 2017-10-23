function dbLog(sequelize, DataTypes) {
    return sequelize.define('log', {
        campaign_id: {
            type: DataTypes.STRING
        },
        app_id: {
            type: DataTypes.STRING
        },
        old_bid: {
            type: DataTypes.FLOAT
        },
        new_bid: {
            type: DataTypes.FLOAT
        },
        ratio: {
            type: DataTypes.FLOAT
        },
        created_at: {
            type: DataTypes.DATE
        }
    });
}

module.exports = dbLog;