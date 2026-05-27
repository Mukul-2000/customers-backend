import express from "express";
import { normalizePort, onError } from "./serverhandler";
import http from 'http';
import { CONFIG } from "./config/environment";
import { Server } from "./server";

const SERVER = new Server();

const PORT = normalizePort(CONFIG.PORT);

SERVER.app.set('port', PORT);

let server = http.createServer(SERVER.app);

server.listen(PORT);

server.on("error", error => onError(error, PORT));


server.on("listening", () => {
    const addr: any = server.address();
    const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    console.log(`Listening on ${bind}`);
})