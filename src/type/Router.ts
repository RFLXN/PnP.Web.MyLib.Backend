import { NextFunction, RequestHandler, Response } from "express";

type RouterHandler = (req: Request, res: Response, next: NextFunction) => void;

type Method = "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head";

interface Router {
    path: string;
    method: Method;
    handler: RequestHandler;
}

export default Router;
