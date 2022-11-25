import { RequestHandler } from "express";

type Method = "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head";

interface Router {
    path: string;
    method: Method;
    handler: RequestHandler;
}

export default Router;
