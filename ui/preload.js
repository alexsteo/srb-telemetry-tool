const {contextBridge} = require('electron');
const {startRead, stopRead, getCounts, getTotalTime} = require("../src/telemetrySave");

contextBridge.exposeInMainWorld("reader", {
    startRead: () => startRead(),
    stopRead: () => stopRead(),
    getCounts: () => getCounts(),
    getTotalTime: () => getTotalTime()
})
