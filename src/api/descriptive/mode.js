var max = require("../common/max");
function mode(data) {
    var distribution = data.reduce(function (prev, curr) {
        var hasValue = !!prev[curr];
        if (hasValue)
            prev[curr]++;
        else
            prev[curr] = 1;
        return prev;
    }, []);
    var maximum = max(distribution);
    var modes = distribution.filter(function (value) { return value === maximum; });
    return modes;
}
module.exports = mode;
//# sourceMappingURL=mode.js.map