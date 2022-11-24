import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/movie/:uuid";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    const { uuid } = req.params;
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send(`/movie/${uuid}`);
};

export { path, method, handler };
