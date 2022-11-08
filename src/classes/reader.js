const {csvHeader, objToCSVValues} = require("../util/csvUtil");
const fs = require("fs");
const {filterAccDataForCSV} = require("../filterers/acc/accFilterer");

class Reader {
    constructor() {
        this.counts = 0;
        this.interval = undefined;
        this.telemetryFileName = '';
        this.totalTime = undefined;
    }

    getCounts () {
        return this.counts;
    }

    getTotalTime () {
        return this.totalTime;
    }

    initTelemetryFile() {
        this.telemetryFileName = './telemetry/telemetry-' + new Date().toISOString().replaceAll(':', '-').split('.')[0] + '.json'
        fs.writeFileSync(this.telemetryFileName, '[');
    }

    startRead () {
        this.startTime = Date.now();
        this.interval = setInterval(() => {
            const data = filterAccDataForCSV();
            if(this.counts > 0) {
                fs.writeFileSync(this.telemetryFileName, ',\n', {flag: 'a'});
            }
            fs.writeFileSync(this.telemetryFileName, JSON.stringify(data), {flag: 'a'});
            this.counts++;
        }, 10)
    }

    stopRead () {
        this.endTime = Date.now();
        fs.writeFileSync(this.telemetryFileName, ']', {flag: 'a'});
        this.totalTime = this.endTime - this.startTime;
        clearInterval(this.interval);
    }
}

module.exports = {
    Reader
}
