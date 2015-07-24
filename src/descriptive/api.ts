import Analysis = require("analysis");
import Descriptive = Analysis.Descriptive;

import mean = require("./mean");
import mode = require("./mode");
import median = require("./median");
import stdDev = require("./stdDev");
import variance = require("./variance");
import zScore = require("./zScore");
import firstQuartile = require("./firstQuartile");
import thirdQuartile = require("./thirdQuartile");
export = api;

var api: Descriptive = {
	mean: mean,
	mode: mode,
	median: median,
	stdDev: stdDev,
	variance: variance,
	zScore: zScore,
	firstQuartile: firstQuartile,
	thirdQuartile: thirdQuartile,
	quartileRange: null
};