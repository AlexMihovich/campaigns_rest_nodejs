var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../main');

chai.use(chaiHttp);

describe("Endpoint tests", function() {
    it('Checks if endpoind is working corret', function() {
        chai.request('http://localhost:3001')
            .get('/campaigns/logs')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.be.empty;
            });
    });
});