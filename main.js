import { logger } from './logger/winston';
import { dbLog } from './database/database';
import express from 'express';

let bodyParser = require('body-parser');
let app = express();

// for valid POST requests processing

dbLog.sequelize.sync()
    .then(() => {
        logger.info('Database successfully synced');
    })
    .catch((err) => {
        logger.error('Database connection error: ', err.message);
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app);

app.listen(3001);
logger.info('Listening on port 3001...');

exports.app = app;