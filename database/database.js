import { config } from '../config/config';
let dbConfig = config.User.dbConfig;


const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.dbname, dbConfig.login, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

let log = sequelize.import('./models/log');

function checkConnection() {
    return sequelize.authenticate()
        .then(() => {
            return 'Connection has been established successfully.';
        })
        .catch(err => {
            return 'Unable to connect to the database:';
        });
}

module.exports = { sequelize: sequelize, dbLog: log, checkConnection: checkConnection };