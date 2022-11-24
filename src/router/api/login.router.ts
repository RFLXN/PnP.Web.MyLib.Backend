import { RequestHandler } from "express";

const path = "/api/login";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/login");
    next();
};

export { path, method, handler };
