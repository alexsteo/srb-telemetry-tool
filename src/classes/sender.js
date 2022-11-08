const express = require('express');
const app = express();
const http = require('http');
const {Server} = require("socket.io");
const { filterAccDataForCSV } = require('../filterers/acc/accFilterer');

class Sender {
    constructor () {
        this.interval  = undefined;
        this.server = http.createServer(app);
        this.io = new Server(this.server, {
            cors: {
                origin: '*'
            }
        });
        this.server.listen(3001);
    }

    sendData () {
        this.interval = setInterval(() => {
            this.io.emit("telemetry_data", filterAccDataForCSV());
        }, 1000);
    }

    stopData () {
        clearInterval(this.interval);
    }
}

module.exports = {
    Sender
}