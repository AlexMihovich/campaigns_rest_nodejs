var chai = require("chai");
var expect = chai.expect;
var db = require('../database/database');

describe("TestDbConnection", function() {
    it("Should return Connection has been established successfully.", function() {
        db.checkConnection()
            .then((connect) => {
                expect(connect).to.equal('Connection has been established successfully.');
            });
    });
});