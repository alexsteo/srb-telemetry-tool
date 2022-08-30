// import * as dgram from 'dgram';
const dgram = require("dgram");
const utf8 = require("utf8-bytes");
const EventEmitter = require("events");
const binutils = require("binutils");

const server = dgram.createSocket("udp4");

const PORT = 9000;
const HOST = "127.0.0.1";

const handle = (msg) => {
    console.log("Message")
    const br = new binutils.BinaryReader(msg, "little");
    const messageType = br.ReadUInt8();
    console.log(messageType)
}


const RegisterConnection = (displayName, connectionPassword, commandPassword, updateMS) => {
    const displayNameArray = utf8(displayName);
    const connectionPasswordArray = utf8(connectionPassword);
    const commandPasswordArray = utf8(commandPassword);

    const writer = new binutils.BinaryWriter("little");
    writer.WriteUInt8(1);
    writer.WriteUInt8(4);
    writer.WriteUInt16(displayNameArray.length);
    writer.WriteBytes(displayNameArray);
    writer.WriteUInt16(connectionPasswordArray.length);
    writer.WriteBytes(connectionPasswordArray);
    writer.WriteUInt32(updateMS);
    writer.WriteUInt16(commandPasswordArray.length);
    writer.WriteBytes(commandPasswordArray);

    return writer.ByteBuffer;
};

server.on("listening", () => console.log("listening"));
server.on("message", handle);
const buffer = RegisterConnection("My Application", "telemetryPass", "telemetryPass", 100);
server.send(buffer, 0, buffer.length, PORT, HOST);
