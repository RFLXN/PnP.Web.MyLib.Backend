import { RequestHandler } from "express";

const path = "/api/user/review/movies";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/user/review/movies");
    next();
};

export { path, method, handler };
