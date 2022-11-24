import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/movie/:uuid/review";
const method = "post";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/movie/:uuid/review");
};

export { path, method, handler };
