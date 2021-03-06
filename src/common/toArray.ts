import isNumber = require("./isNumber");
import validateArray = require("./validateArray");
import errors = require("../errors");
export = convert;

function convert(data: number[]|{}): number[] {
	if (data instanceof Array)
		return validateArray(data);

	if (typeof data !== "object") throw new TypeError(errors.MustBeArrayOrObject);

	var dot = key => data[key];
	return validateArray(Object.keys(data).map(dot));
}