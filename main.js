import { logger } from './logger/winston';

var express = require('express');
var app = express();

// for valid POST requests processing
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./routes')(app);

app.listen(3001);
logger.info('Listening on port 3001...');