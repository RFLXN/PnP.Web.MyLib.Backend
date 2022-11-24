import { RequestHandler } from "express";
import HttpContentType from "../../../../type/HttpContentType";

const path = "/api/user/review/books";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/user/review/books");
};

export { path, method, handler };
