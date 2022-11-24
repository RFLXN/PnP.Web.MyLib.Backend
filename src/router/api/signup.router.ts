import { RequestHandler } from "express";

const path = "/api/signup";
const method = "post";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/signup");
    next();
};

export { path, method, handler };
