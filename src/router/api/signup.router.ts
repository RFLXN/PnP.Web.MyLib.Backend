import { RequestHandler } from "express";
import { promisify } from "util";
import HttpContentType from "../../type/HttpContentType";
import SignUpData from "../../type/SignUpData";

const path = "/api/signup";
const method = "post";
const handler: RequestHandler = async (req, res) => {
    const body = await promisify<SignUpData>(res.json)();
    console.log(body);
    res.status(200)
        .contentType(HttpContentType.ApplicationJson)
        .send("/signup");
};

export { path, method, handler };
