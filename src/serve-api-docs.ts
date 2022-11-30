import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import loadJson from "./util/load-json";
import ServerConfig from "./type/ServerConfig";

const PROJECT_ROOT = dirname(fileURLToPath(import.meta.url));
const DOCS_PATH = resolve(PROJECT_ROOT, "../document/api-docs/index.html");
const CONFIG_PATH = resolve(PROJECT_ROOT, "../resource/server.json");

const configs = await loadJson<ServerConfig>(CONFIG_PATH);

const app = express();

app.all("/", async (req, res) => {
    const raw = await readFile(DOCS_PATH);
    res.status(200)
        .send(raw.toString());
});

const server = app.listen(configs.apiDocPort, () => {
    console.log(`API Specification Document Serve on Port ${configs.apiDocPort}`);
});

server.on("request", (res) => {
    const { remoteAddress } = res.connection;
    console.log(`Handle API Document Request From ${remoteAddress}`);
});
