import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import loadRouters from "./router-loader";
import loadJson from "./util/load-json";
import ServerConfig from "./type/ServerConfig";

// Same to __dirname (Node.js ES Module Resolution Make __dirname Not Working)
const PROJECT_ROOT = dirname(fileURLToPath(import.meta.url));
const SERVER_CONFIG_FILE = resolve(PROJECT_ROOT, "../resource/server.json");

// Load server.json for Server Configs
const serverConfig = await loadJson<ServerConfig>(SERVER_CONFIG_FILE);

const app = express();

// Register Middleware for JSON Processing
app.use(express.json());

// Load Routers
const routers = await loadRouters();

// And Apply Routers
routers.map((router) => {
    app[router.method](router.path, router.handler);
    console.log(`Apply Router: ${router.path}`);
});

// Default Router for 404 Error
app.all("*", (req, res, next) => {
    res.sendStatus(404);
});

// Open Port
const server = app.listen(serverConfig.port);

// When Server on Error
server.on("err", (e: Error) => {
    console.error(e);
});

// When Server Ready and Listening Port
server.on("listening", () => {
    console.log(`Server Listening on Port '${serverConfig.port}'`);
});

// Server Request Handler for Logging
server.on("request", (req: IncomingMessage, res: ServerResponse) => {
    const { remoteAddress } = req.socket;
    const {
        url,
        method
    } = req;
    console.log(`Handle Request from '${remoteAddress}' to '${method} ${url}'`);
});

export { app, server, PROJECT_ROOT };
