import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import loadRouters from "./router-loader";

const getProjectRoot = () => dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());

const routers = await loadRouters();

routers.forEach((router) => {
    app[router.method](router.path, router.handler);
});

export { app, getProjectRoot };
