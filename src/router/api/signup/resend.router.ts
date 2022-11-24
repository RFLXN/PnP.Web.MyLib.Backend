import { RequestHandler } from "express";

const path = "/api/signup/resend";
const method = "post";
const handler: RequestHandler = async (req, res, next) => {
    res.status(200)
        .send("/signup/resend");
    next();
};

export { path, method, handler };
