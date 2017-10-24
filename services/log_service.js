import { Log } from '../models/log';
import { dbLog } from '../database/database';
import { logger } from '../logger/winston';
const Sequelize = require('sequelize');


class LogService {

    displayLogs(req, res) {
        logger.info('Retrieving data from database...');
        dbLog.findAll().then(logs => {
            res.send((logs));
        });
    }

    createLogApi(req, res) {
        logger.info('Creating new entry in database...');
        let new_log = new Log(req.body.campaign_id, req.body.app_id, req.body.old_bid, req.body.new_bid, req.body.ratio, req.body.create_at);
        dbLog.create(new_log, function(err, logs) {
            if (err) return logger.error(err);
            return res.send(logs);
        });
    }

    getLogsByCompanyId(req, res) {
        logger.info('Retrieving data from database...');
        let id = req.params.id;
        let logsList = [];
        dbLog.findAll({ where: { campaign_id: id } }).then(logs => {
            logs.forEach((entry) => {
                logsList.push(entry.dataValues);
            });
            logsList = logs.map(log => log.toJSON());
            res.send((logsList));
        });
    }

    createLog(log) {
        logger.info('Creating new entry in database...');
        return dbLog.create(log, function(err, logs) {
            if (err) return logger.error(err);
        });
    }
}


exports.LogService = LogService;