import { RequestHandler } from "express";

const path = "/api/movie/:uuid";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/movie/:uuid");
    next();
};

export { path, method, handler };
