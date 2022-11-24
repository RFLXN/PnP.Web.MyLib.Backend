import { RequestHandler } from "express";

const path = "/api/movie/:uuid/review";
const method = "post";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/movie/:uuid/review");
    next();
};

export { path, method, handler };
