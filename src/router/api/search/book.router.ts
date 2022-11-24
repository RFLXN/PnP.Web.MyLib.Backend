import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/search/book";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/search/book");
};

export { path, method, handler };
