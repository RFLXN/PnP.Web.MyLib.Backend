import { RequestHandler } from "express";

const path = "/api/search/book";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/search/book");
    next();
};

export { path, method, handler };
