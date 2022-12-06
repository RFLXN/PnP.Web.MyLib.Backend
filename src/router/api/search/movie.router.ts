import { RequestHandler } from "express";
import HttpContentType from "../../../type/HttpContentType";
import logger from "../../../logger";
import getClient from "../../../naver/create-client";
import HttpResponseBody from "../../../type/HttpResponseBody";

const path = "/api/search/movie";
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
        const result = await client.searchMovie({ query: title as string });

        // TODO: Implement Compare to DB and Add to DB

        const movies = result.items.map((raw) => ({
            uuid: "1",
            title: raw.title,
            subtitle: raw.subtitle,
            publishedYear: raw.pubDate,
            director: raw.director,
            actor: raw.actor,
            thumbnail: raw.image
        }));

        const body: HttpResponseBody<{ results: typeof movies }> = {
            info: {
                success: true,
                message: "Successfully Executed"
            },
            data: {
                results: movies
            }
        };

        res.status(200)
            .contentType(HttpContentType.ApplicationJson)
            .json(body);
    } catch (e) {
        logger.error(e);
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
