import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import loadRouters from "./router-loader";
import loadJson from "./util/load-json";
import ServerConfig from "./type/ServerConfig";

const PROJECT_ROOT = dirname(fileURLToPath(import.meta.url));
const SERVER_CONFIG_FILE = resolve(PROJECT_ROOT, "../resource/server.json");

const serverConfig = await loadJson<ServerConfig>(SERVER_CONFIG_FILE);

const app = express();

app.use(express.json());

const routers = await loadRouters();

routers.forEach((router) => {
    app[router.method](router.path, router.handler);
    console.log(`Apply Router: ${router.path}`);
});

app.all("*", (req, res, next) => {
    res.sendStatus(404);
});

const server = app.listen(serverConfig.port);

server.on("err", (e: Error) => {
    console.error(e);
});

server.on("listening", () => {
    console.log(`Server Listening on Port '${serverConfig.port}'`);
});

server.on("request", (req: IncomingMessage, res: ServerResponse) => {
    const { remoteAddress } = req.socket;
    const {
        url,
        method
    } = req;
    console.log(`Handle Request from '${remoteAddress}' to '${method} ${url}'`);
});

export { app, server, PROJECT_ROOT };
