const {Reader} = require("./reader");
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

module.exports = {
    startRead,
    stopRead,
    getCounts,
    getTotalTime
}
