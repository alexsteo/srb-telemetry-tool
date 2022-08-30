const {createServer} = require("http");
const {Server} = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("asdasd")
    socket.on("app_start", () => {
        setInterval(() => socket.emit("message", makeid(15)), 1000)
    })
});

httpServer.listen(3001);

const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    console.log(result)
    return result;
}
