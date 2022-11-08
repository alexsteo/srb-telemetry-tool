const {Reader} = require("./classes/reader");
let reader;

const startRead = () => {
    reader = new Reader();
    reader.initTelemetryFile();
    reader.startRead();
}

const stopRead = () => {
    if(!!reader) {
        reader.stopRead();
    }
}

const getCounts = () => {
    if(!!reader) {
        return reader.getCounts();
    }
}

const getTotalTime = () => {
    if(!!reader) {
        return reader.getTotalTime();
    }
}

const openTelemetryFolder = () => {
    require('child_process').exec('start "" ".\\telemetry"');
}

module.exports = {
    startRead,
    stopRead,
    getCounts,
    getTotalTime,
    openTelemetryFolder
}
