const {contextBridge} = require('electron');
const {startRead, stopRead, getCounts, getTotalTime, openTelemetryFolder} = require("../src/telemetrySave");
const { startSend } = require('../src/telemetrySend');

contextBridge.exposeInMainWorld("reader", {
    startRead: () => startRead(),
    stopRead: () => stopRead(),
    getCounts: () => getCounts(),
    getTotalTime: () => getTotalTime(),
    openTelemetryFolder: () => openTelemetryFolder()
})

contextBridge.exposeInMainWorld('sender', {
    startSend: () => startSend(),
    stopSend: () => startSend()
})
