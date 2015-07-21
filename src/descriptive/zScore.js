var stdDev = require("./stdDev");
var mean = require("./mean");
function zScore(data, value) {
    return (value - mean(data)) / stdDev(data);
}
module.exports = zScore;
//# sourceMappingURL=zScore.js.map