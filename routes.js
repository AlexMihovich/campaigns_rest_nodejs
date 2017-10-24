import { LogService } from './services/log_service';
import { ResearchService } from './services/research_service';


module.exports = function(app) {
    var log_service = new LogService();
    let baseUrl = "/campaign";

    app.get(`${baseUrl}/logs/:id`, log_service.getLogsByCompanyId);
    app.get(`${baseUrl}/logs`, log_service.displayLogs);
    app.post(`${baseUrl}/log/insert`, log_service.createLogApi);

    app.get(`${baseUrl}/run`, ResearchService);
};