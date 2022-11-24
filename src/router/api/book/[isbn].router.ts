import { RequestHandler } from "express";

const path = "/api/book/:isbn";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/book/:isbn");
    next();
};

export { path, method, handler };
