const start = () => {
    reader.startRead()
}
document.getElementById("start").onclick = start;

const openTelemetryFolder = () => {
    reader.openTelemetryFolder()
}
document.getElementById("open").onclick = openTelemetryFolder;

const stop = () => {
    reader.stopRead()
    document.getElementById('counts').innerText = 'Counts:' + reader.getCounts()
    document.getElementById('time').innerText = 'Time:' + reader.getTotalTime() / 1000 + 'seconds'
}
document.getElementById("stop").onclick = stop;

const send = () => {
    sender.startSend();
}
document.getElementById("send").onclick = send;

const nosend = () => {
    sender.stopSend();
}
document.getElementById("nosend").onclick = nosend;

