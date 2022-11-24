import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/book/:isbn/review";
const method = "post";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/book/:isbn/review");
};

export { path, method, handler };
