const start = () => {
    test.start()
}
document.getElementById("start").onclick = start;

const stop = () => {
    test.stop()
    document.getElementById("counts").innerText = "Counts: " + test.counts()
    document.getElementById("time").innerText = "time: " + test.time()
}
document.getElementById("stop").onclick = stop;

