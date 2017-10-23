const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_logs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
    max: 5,
    min: 0,
    idle: 10000
    }
});

let log = sequelize.import('./models/log');

module.exports = { sequelize: sequelize, dbLog: log };