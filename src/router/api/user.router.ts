import { RequestHandler } from "express";

const path = "/api/user";
const method = "get";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/user");
    next();
};

export { path, method, handler };
