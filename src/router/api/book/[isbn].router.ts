import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";

const path = "/api/book/:isbn";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    const { isbn } = req.params;
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send(`/book/${isbn}`);
};

export { path, method, handler };
