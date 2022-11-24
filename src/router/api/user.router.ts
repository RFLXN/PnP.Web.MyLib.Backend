import { RequestHandler } from "express";
import HttpContentType from "../../type/HttpContentType";

const path = "/api/user";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/user");
};

export { path, method, handler };
