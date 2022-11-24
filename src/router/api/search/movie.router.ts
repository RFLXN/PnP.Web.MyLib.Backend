import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/search/movie";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/search/movie");
};

export { path, method, handler };
