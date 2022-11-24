import { RequestHandler } from "express";

const path = "/api/book/:isbn/review";
const method = "post";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/book/:isbn/review");
    next();
};

export { path, method, handler };
