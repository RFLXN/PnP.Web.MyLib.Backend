import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";
import getClient from "../../../naver/create-client";
import HttpResponseBody from "../../../type/HttpResponseBody";

const path = "/api/search/book";
const method = "get";
const handler: RequestHandler = async (req, res) => {
    const { title } = req.query;

    if (!title) {
        res.status(200)
            .contentType(HttpContentType.ApplicationJson)
            .json({
                success: false,
                message: "Cannot Find 'title' Query String"
            });
        return;
    }

    try {
        const client = getClient();

        const result = await client.searchBook({
            query: title as string
        });

        const books = result.items.map((raw) => ({
            title: raw.title,
            isbn: raw.isbn,
            author: raw.author,
            publisher: raw.publisher,
            publishedDate: raw.pubdate,
            thumbnail: raw.image
        }));

        const body: HttpResponseBody = {
            info: {
                success: true,
                message: "Successfully Executed"
            },
            data: {
                results: books
            }
        };

        res.status(200)
            .contentType(HttpContentType.ApplicationJson)
            .json(body);
    } catch (e) {
        res.status(200)
            .contentType(HttpContentType.ApplicationJson)
            .json({
                info: {
                    success: false,
                    message: "Invalid Server Error"
                }
            });
    }
};

export { path, method, handler };
