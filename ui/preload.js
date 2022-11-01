window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

const {contextBridge} = require('electron');
const {getTotalTime, getCounts, startListen, stopListen} = require("../src/telemetrySave");
contextBridge.exposeInMainWorld("test", {
    counts: () => getCounts(),
    time: () => getTotalTime(),
    start: () => startListen(),
    stop: () => stopListen()
})
