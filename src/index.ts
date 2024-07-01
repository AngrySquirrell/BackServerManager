import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import si from "systeminformation";

si.chassis().then((data) => console.log(data));

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* options */
});

io.on("connection", (socket) => {
    // ...
});

httpServer.listen(3000);
