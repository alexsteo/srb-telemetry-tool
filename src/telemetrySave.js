const {filterAccDataForCSV} = require("./filterers/acc/accFilterer");
const fs = require("fs");
const {csvHeader, objToCSVValues} = require("./util/csvUtil");

let interval;
let counts = 0;
let startTime;
let totalTime;

const getTotalTime = () => {
    return totalTime;
}

const getCounts = () => {
    return counts;
}

const startListen = () => {
    const telemetryFileName = 'telemetry.csv';
    fs.writeFileSync(telemetryFileName, csvHeader + '\n');
    counts = 0;
    startTime = Date.now();
    interval = setInterval(() => {
        counts++;
        const data = filterAccDataForCSV();
        const csvData = objToCSVValues(data);
        fs.writeFileSync(telemetryFileName, csvData, {flag: 'a'});
    }, 10);
}

const stopListen = () => {
    totalTime = Date.now() - startTime;
    clearInterval(interval);
}

module.exports = {
    startListen,
    stopListen,
    getTotalTime,
    getCounts
}
