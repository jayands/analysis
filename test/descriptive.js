var descriptive = require("../src/descriptive/api");
var round = require("../src/common/round");
var chai = require("chai");
var expect = chai.expect;
describe("Descriptive module tests", function () {
    it("will find the mean for a dataset", function () {
        var data = [2, 3, 2, 3, 2, 3]; // 15	
        expect(descriptive.mean(data)).to.equal(2.5);
    });
    it("will find the mode for a unimodal dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
        var modes = descriptive.mode(data);
        expect(modes.length).to.equal(1);
        expect(modes[0]).to.equal(5);
    });
    it("will find the modes for a bimodal dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
        var modes = descriptive.mode(data);
        expect(modes.length).to.equal(2);
        expect(modes).to.contain(5);
        expect(modes).to.contain(6);
    });
    it("will find the modes for a multimodal (3+) dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7];
        var modes = descriptive.mode(data);
        expect(modes.length).to.equal(3);
        expect(modes).to.contain(5);
        expect(modes).to.contain(6);
        expect(modes).to.contain(7);
    });
    it("will find the median for a dataset with 1 value", function () {
        var data = [5];
        expect(descriptive.median(data)).to.equal(5);
    });
    it("will find the median for a dataset with 2 values", function () {
        var data = [5, 6];
        expect(descriptive.median(data)).to.equal(5.5);
    });
    it("will find the median for a dataset with 3 values", function () {
        var data = [5, 10, 15];
        expect(descriptive.median(data)).to.equal(10);
    });
    it("will calculate the variance of a population correctly", function () {
        expect(descriptive.variance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
            .to.be.equal(8.25);
    });
    it("will calculate the standard deviation", function () {
        var theStdDev = round(descriptive.stdDev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2);
        expect(theStdDev).to.equal(2.87);
    });
    it("will calculate the z-score correctly", function () {
        expect(descriptive.zScore([85, 90, 95, 100, 105, 110, 115], 110)).to.equal(1);
    });
    it("will calculate the first quartile", function () {
        expect(descriptive.firstQuartile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
            .to.equal(3);
        expect(descriptive.firstQuartile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
            .to.equal(3);
    });
    it("will throw if less than 4 values are supplied to first quartile", function () {
        expect(descriptive.firstQuartile.bind(descriptive.firstQuartile, [1, 2, 3]))
            .to.throw("Not enough values supplied");
    });
});
//# sourceMappingURL=descriptive.js.map