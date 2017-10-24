function dbLog(sequelize, DataTypes) {
    return sequelize.define('log', {
        campaign_id: {
            type: DataTypes.STRING
        },
        app_id: {
            type: DataTypes.STRING
        },
        old_bid: {
            type: DataTypes.FLOAT,
            validate: {
                isFloat: true
            }
        },
        new_bid: {
            type: DataTypes.FLOAT,
            validate: {
                isFloat: true
            }
        },
        ratio: {
            type: DataTypes.FLOAT,
            validate: {
                isFloat: true
            }
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            validate: {
                isDate: true,
                isAfter: "2017-01-01"
            }

        },
    });
}

module.exports = dbLog;