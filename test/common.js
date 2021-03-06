var chai = require("chai");
var errors = require("../src/errors");
var helper = require("./helpers");
var expect = chai.expect;
var common = require("../src/common/api");
describe("Common module unit tests", function () {
    it("isNumber: will return false when passed a non-number", function () {
        expect(common.isNumber("a")).to.be.false;
        expect(common.isNumber(NaN)).to.be.false;
    });
    it("isNumber: will return true when passed a number", function () {
        expect(common.isNumber(1)).to.be.true;
        expect(common.isNumber(0)).to.be.true;
        expect(common.isNumber(-1)).to.be.true;
    });
    it("isWhole: will throw if passed a non-number", function () {
        expect(common.isWhole.bind(common.isWhole, "not a number")).to.throw(errors.MustBeNumber);
    });
    it("isWhole: will correctly determine that a non-whole number is not whole", function () {
        expect(common.isWhole(1.5)).to.be.false;
    });
    it("isWhole: will correctly determine that a whole number is whole", function () {
        expect(common.isWhole(1)).to.be.true;
    });
    it("isEven: will correctly determine if a value is even", function () {
        expect(common.isEven(1)).to.be.false;
        expect(common.isEven(2)).to.be.true;
        expect(common.isEven(0)).to.be.true;
    });
    it("isEven: will throw when invalid input is passed to isEven", function () {
        expect(common.isEven.bind(common.isEven, "not a number")).to.throw(errors.MustBeNumber);
    });
    it("max: will find the maximum number in a dataset", function () {
        expect(common.max([1, 2, 3, 4, 5, 6, 7])).to.equal(7);
        expect(common.max([-1, -2, -3, -4, -5, -6, -7])).to.equal(-1);
    });
    it("min: will find the minimum number in a dataset", function () {
        expect(common.min([1, 2, 3, 4, 5, 6, 7])).to.equal(1);
        expect(common.min([-3, 0, 3])).to.equal(-3);
    });
    it("range: will find the range (min and max) in a dataset", function () {
        var dataRange = common.range([10, 20, 30, 40, 50, 60]);
        expect(dataRange.minimum).to.equal(10);
        expect(dataRange.maximum).to.equal(60);
    });
    it("toArray: will throw when invalid input", function () {
        expect(common.toArray.bind(common.toArray, "bad type")).to.throw(errors.MustBeArrayOrObject);
        expect(common.toArray.bind(common.toArray, ["word", 1, 2, 3, 4])).to.throw(errors.AllMustBeNumbers);
    });
    it("toArray: will convert an object of string:number to an array", function () {
        var obj = {
            "one": 1,
            "two": 2,
            "three": 3
        };
        var data = common.toArray(obj);
        expect(data.length).to.equal(3);
        expect(data).to.contain(1);
        expect(data).to.contain(2);
        expect(data).to.contain(3);
    });
    it("round: will round a value correctly to 0 decimal places", function () {
        var rounded = common.round(123.456);
        expect(rounded).to.equal(123);
    });
    it("round: will round a value correctly to 1 decimal places", function () {
        var rounded = common.round(123.456, 1);
        expect(rounded).to.equal(123.5);
    });
    it("round: will round a value correctly to 2 decimal places", function () {
        var rounded = common.round(123.456, 2);
        expect(rounded).to.equal(123.46);
    });
    it("sum: will calculate the sum of a dataset", function () {
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var total = common.sum(data);
        expect(total).to.equal(55);
    });
    it("sortAsc: will sort an unordered array ascending without mutating the original array", function () {
        var data = [2, 1, 4, 3];
        var sorted = common.sortAsc(data);
        helper.arrayIsEqual(data, [2, 1, 4, 3]);
        helper.arrayIsEqual(sorted, [1, 2, 3, 4]);
    });
    it("sortDesc: will sort an unordered array descending without mutating the original array", function () {
        var data = [2, 1, 4, 3];
        var sorted = common.sortDesc(data);
        helper.arrayIsEqual(data, [2, 1, 4, 3]);
        helper.arrayIsEqual(sorted, [4, 3, 2, 1]);
    });
    it("factorial: will correctly calculate", function () {
        expect(common.factorial(1)).to.equal(1);
        expect(common.factorial(2)).to.equal(2);
        expect(common.factorial(3)).to.equal(6);
        expect(common.factorial(4)).to.equal(24);
        expect(common.factorial(5)).to.equal(120);
    });
    it("factorial: will throw if supplied a non-number", function () {
        expect(common.factorial.bind(common.factorial, "string"))
            .to.throw(errors.MustBeNumber);
        expect(common.factorial.bind(common.factorial, NaN))
            .to.throw(errors.MustBeNumber);
    });
    it("factorial: will throw if supplied non-whole number", function () {
        expect(common.factorial.bind(common.factorial, 2.1))
            .to.throw(errors.MustBeWhole);
    });
    it("factorial: will throw if given a number below zero", function () {
        expect(common.factorial.bind(common.factorial, -1))
            .to.throw(errors.MustBeAtLeastZero);
    });
});
//# sourceMappingURL=common.js.map