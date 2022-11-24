import { RequestHandler } from "express";

const path = "/api/signup/auth";
const method = "post";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/signup/auth");
    next();
};

export { path, method, handler };
