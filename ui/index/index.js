const start = () => {
    reader.startRead()
}
document.getElementById("start").onclick = start;

const stop = () => {
    reader.stopRead()
    document.getElementById('counts').innerText = reader.getCounts()
    document.getElementById('time').innerText = reader.getTotalTime()
}
document.getElementById("stop").onclick = stop;

