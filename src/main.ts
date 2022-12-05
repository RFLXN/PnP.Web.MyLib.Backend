import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { resolve } from "path";
import loadRouters from "./router-loader";
import loadJson from "./util/load-json";
import ServerConfig from "./type/ServerConfig";
import { RESOURCE_PATH } from "./util/project-paths";
import logger from "./logger";
import { loadClient as loadNaverApiClient } from "./naver/create-client";

const SERVER_CONFIG_FILE = resolve(RESOURCE_PATH, "server.json");

// Load server.json for Server Configs
const serverConfig = await loadJson<ServerConfig>(SERVER_CONFIG_FILE);

// Load Naver API Configs and Init Client
await loadNaverApiClient();

const app = express();

// Register Middleware for JSON Processing
app.use(express.json());

// Load Routers
const routers = await loadRouters();

// Apply Routers
routers.map((router) => {
    app[router.method](router.path, (req, res, next) => {
        try {
            router.handler(req, res, next);
        } catch (e) {
            logger.error(e);
        }
    });
    logger.info(`Apply Router: ${router.path}`);
});

// Default Router will returns 404 Error
app.all("*", (req, res) => {
    res.sendStatus(404);
});

// Open Port
const server = app.listen(serverConfig.port);

// When Server on Error
server.on("err", (e: Error) => {
    logger.error(e);
});

// When Server Ready and Listening Port
server.on("listening", () => {
    logger.info(`Server Listening on Port '${serverConfig.port}'`);
});

// Server Request Handler for Logging
server.on("request", (req: IncomingMessage, res: ServerResponse) => {
    const { remoteAddress } = req.socket;
    const {
        url,
        method
    } = req;
    logger.info(`Handle Request from '${remoteAddress}' to '${method} ${url}'`);
});

export { app, server };
