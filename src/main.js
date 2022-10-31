const {readAll, readAllAccFiltered} = require("./readers/ac/reader");
const {readGraphicsAccFiltered, readGraphics} = require("./readers/ac/graphicReader");
const {filterAccData, filterAccDataForCSV} = require("./filterers/acc/accFilterer");
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on("connection", (socket) => {
    let interval;
    console.log("connection");
    socket.on("req_acc_data", () => {
        console.log("requested data");
    });
    socket.on("req_acc_data", () => {
        console.log("requested data");
        interval = setInterval(() => {
            console.log('sent')
            socket.emit("send_acc_data", filterAccDataForCSV());
        }, 15);
    });
    socket.on("stop_acc_data", () => {
        console.log("stop request");
        clearInterval(interval);
    })
});

server.listen(3001);
