import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/signup/resend";
const method = "post";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/signup/resend");
};

export { path, method, handler };
