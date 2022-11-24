import { RequestHandler } from "express";
import HttpContentType from "../../type/HttpContentType";

const path = "/api/login";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    const {
        email,
        password
    } = req.query;

    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .json({});
};

export { path, method, handler };
