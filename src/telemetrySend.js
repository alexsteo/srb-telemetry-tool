const { Sender } = require("./classes/sender");
let sender;

const startSend = () => {
    sender = new Sender();
    sender.sendData();
}

const stopSend = () => {
    if(!!sender) {
        sender.stopData();
    }
}

module.exports = {
    startSend,
    stopSend
}
