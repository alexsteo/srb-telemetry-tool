const {filterAccData, filterAccDataForCSV} = require("./filterers/acc/accFilterer");
const fs = require("fs");

const openFile = () => {
    const fileName = "telemetry.json";
    fs.writeFileSync(fileName, "[");
    console.log("Opened File" + fileName)
    return fileName;
}

const closeFile = (fileName) => {
    fs.writeFileSync(fileName, "]", {flag: 'a'});
    console.log("Closed File")
}

const writeData = (fileName, data) => {
    console.log("start Write")
    fs.writeFileSync(fileName, JSON.stringify(data).slice(1, -1) + ',', {flag: 'a'});
    console.log("finished Write")
}

const startRead = () => {
    let dataSet = [];
    let dataCount = 0;
    const outFile = openFile();
    const reader = setInterval( () => {
        const currentData = filterAccDataForCSV();
        dataCount++;
        if(currentData.speedKmh >= 1) {
            dataSet.push(currentData);
        } else {
            console.log("Found a bad boi", currentData.distanceTraveled)
        }
        if(currentData.laps === 1) {
            writeData(outFile, dataSet);
            closeFile(outFile);
            clearInterval(reader);
        }
        if(dataCount === 200 && dataSet.length > 0) {
            writeData(outFile, dataSet);
            dataCount = 0;
            dataSet = [];
        }
    }, 20)
}

startRead();
