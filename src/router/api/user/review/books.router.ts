import { RequestHandler } from "express";

const path = "/api/user/review/books";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/user/review/books");
    next();
};

export { path, method, handler };
