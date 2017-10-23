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

function checkConnection() {
return sequelize
  .authenticate()
  .then(() => {
    return 'Connection has been established successfully.';
  })
  .catch(err => {
    return 'Unable to connect to the database:';
  });
}

module.exports = { sequelize: sequelize, dbLog: log, checkConnection: checkConnection};