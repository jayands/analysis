var chai = require("chai");
var errors = require("../src/errors");
var helper = require("./helpers");
var expect = chai.expect;
var common = require("../src/common/api");
var curry = common.curry;
var __ = curry.gap;
describe("(Common) Functional module unit tests", function () {
    it("curry: will curry a 2 argument function", function () {
        var pow = curry(Math.pow, 2);
        expect(pow(2)).to.equal(4);
        expect(pow(3)).to.equal(8);
    });
    it("curry: will curry a simple 2 argument using a gap", function () {
        var squared = curry(Math.pow, __, 2);
        expect(squared(5)).to.equal(25);
        expect(squared(6)).to.equal(36);
    });
    it("curry: will correctly curry 3 argument functions", function () {
        var fn = function (left, mid, right) { return (left + mid) * right; };
        var first = common.curry(fn, 2, __, 2);
        expect(first(2)).to.equal(8);
        expect(first(3)).to.equal(10);
        var second = common.curry(fn, __, __, 2);
        expect(second(2, 2)).to.equal(8);
        expect(second(2)(3)).to.equal(10);
        expect(second(__, 4)(2)).to.equal(12);
    });
    it("compose: will compose functions without throwing", function () {
        expect(common.compose.bind(common.compose, helper.halve, helper.double))
            .to.not.throw;
        expect(common.compose(helper.double, Math.pow))
            .to.not.throw;
    });
    it("compose: will throw arity errors when non-right-most is not unary", function () {
        expect(common.compose.bind(common.compose, Math.pow, helper.halve))
            .to.throw(errors.AllFuncsMustBeUnary);
        expect(common.compose.bind(common.compose, helper.double, Math.pow, helper.halve))
            .to.throw(errors.AllFuncsMustBeUnary);
    });
    it("compose: will throw insufficient args error", function () {
        expect(common.compose.bind(common.compose, Math.pow))
            .to.throw(errors.InsufficientValues);
    });
    it("compose: will throw invalid input error", function () {
        expect(common.compose.bind(common.compose, 1, Math.pow))
            .to.throw(errors.AllMustBeFunctions);
        expect(common.compose.bind(common.compose, Math.pow, 1))
            .to.throw(errors.AllMustBeFunctions);
    });
    it("compose: will correctly compose functions and return the expect value", function () {
        var c1 = common.compose(helper.double, Math.pow);
        expect(c1(2, 2)).to.equal(8);
        expect(c1(4, 2)).to.equal(32);
        var c2 = common.compose(helper.double, helper.double, Math.pow);
        expect(c2(2, 2)).to.equal(16);
        expect(c2(4, 2)).to.equal(64);
        var c3 = common.compose(Math.sqrt, helper.halve, helper.halve);
        expect(c3(c2(2, 2))).to.equal(2);
    });
});
//# sourceMappingURL=functional.js.map