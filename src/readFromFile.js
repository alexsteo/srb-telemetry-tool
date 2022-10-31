const fs = require('fs');

let one;

// fs.readFile('datawide.json', 'utf8', (err, data) => {
//     const res = JSON.parse(data);
//     let longString = ""
//
//     const objToCSVHeader = (data) => {
//         let headerString = ""
//         for (let key of Object.keys(data)) {
//             if(typeof data[key] === 'object') {
//                 if (typeof data[key][0] === 'object') {
//                     const arrayLength1 = data[key].length
//                     const arrayLength2 = data[key][0].length
//                     for(let i = 1; i <= arrayLength1; i++) {
//                         for(let j = 1; j <= arrayLength2; j++) {
//                             headerString += key + "_" + i + "_" + j + ",";
//                         }
//                     }
//                 } else {
//                     const arrayLength = data[key].length
//                     for(let i = 1; i <= arrayLength; i++) {
//                         headerString += key + "_" + i + ",";
//                     }
//                 }
//             } else {
//                 headerString += key + ","
//             }
//         }
//         return headerString.slice(0, -1);
//     }
//
//     const objToCSVValues = (data) => {
//         let valuesString = ""
//         for (let key of Object.keys(data)) {
//             if(typeof data[key] === 'object') {
//                 const arrayLength = data[key].length
//                 for(let i = 0; i < arrayLength; i++) {
//                     valuesString += data[key][i] + ",";
//                 }
//             } else {
//                 valuesString += data[key] + ","
//             }
//         }
//         return valuesString.slice(0, -1);
//     }
//
//     longString += objToCSVHeader(res[0]) + "\n";
//     for (let entry of res) {
//         longString += objToCSVValues(entry) + "\n";
//     }
//
//     const writeToFile = () => {
//         fs.writeFileSync("./data.csv", longString);
//         console.log("Wrote to file")
//     }
//
//     writeToFile();
// });

fs.readFile('telemetry.json', 'utf8', (err, data) => {
    let res = JSON.parse(data);
    console.log(res.length)
});

