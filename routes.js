import { LogService } from './services/log_service';

module.exports = function(app) {
    var runs = require('./services/run');
    var log_service = new LogService();

    app.get('/campaigns/logs/:id', log_service.getLogsByCompanyId);
    app.get('/campaigns/logs', log_service.displayLogs);
    app.post('/campaigns/log/insert', log_service.createLogApi);

    app.get('/run', runs.runResearch);
};