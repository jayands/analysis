var mean = require("../src/api/descriptive/mean");
var mode = require("../src/api/descriptive/mode");
//import median = require("../src/api/descriptive/median");
var chai = require("chai");
var expect = chai.expect;
describe("Descriptive module tests", function () {
    it("will find the mean for a dataset", function () {
        var data = [2, 3, 2, 3, 2, 3]; // 15	
        expect(mean(data)).to.equal(2.5);
    });
    it("will find the mode for a unimodal dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
        var modes = mode(data);
        expect(modes[0]).to.equal(5);
    });
});
//# sourceMappingURL=descriptive.js.map