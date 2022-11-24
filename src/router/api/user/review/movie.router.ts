import { RequestHandler } from "express";
import HttpContentType from "../../../../type/HttpContentType";

const path = "/api/user/review/movies";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/user/review/movies");
};

export { path, method, handler };
