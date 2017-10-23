import { logger } from './logger/winston';
import { dbLog } from './database/mysql';

var express = require('express');
var app = express();

dbLog.sequelize.sync().then(() => {

    // for valid POST requests processing
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    require('./routes')(app);

    app.listen(3001);
    logger.info('Listening on port 3001...');

});


exports.app = app;