import { RequestHandler } from "express";

const path = "/api/search/movie";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/search/movie");
    next();
};

export { path, method, handler };
