import { Headers } from "node-fetch";
import fetchJson from "../util/fetch-json";
import getObjectKeys from "../util/object-key";
import { SearchBookResult, SearchMovieResult } from "../type/NaverApiExecuteResult";
import logger from "../logger";
import { NaverApiMovieCountry, NaverApiMovieGenre } from "../type/NaverApiMovieEnum";

type SearchOption = Record<string, string | number>;

interface BookSearchOption extends SearchOption {
    /**
     * Search String
     */
    query: string;
    /**
     * Max Search Numbers (10~100)
     */
    display?: number;
    /**
     * Search Page Start Index (1~100)
     */
    start?: number;
    /**
     * sim: Sort by Accurate / date: Sort by Date
     */
    sort?: "sim" | "date";
}

interface MovieSearchOption extends SearchOption {
    /**
     * Search String
     */
    query: string;
    /**
     * Max Search Numbers (10~100)
     */
    display?: number;
    /**
     * Search Page Start Index (1~100)
     */
    start?: number;
    /**
     * Movie Genre Code
     */
    genre?: NaverApiMovieGenre | keyof typeof NaverApiMovieGenre;
    /**
     * National Code
     */
    country?: NaverApiMovieCountry | keyof typeof NaverApiMovieCountry;
    /**
     * Published Date Search from (format: yyyy)
     */
    yearfrom?: number;
    /**
     * Published Date Search to (format: yyyy)
     */
    yearto?: number;
}

enum ApiPath {
    SearchBook = "/search/book.json",
    SearchMovie = "/search/movie.json"
}

enum ApiMethod {
    SearchBook = "GET",
    SearchMovie = "GET"
}

type ApiKey = keyof typeof ApiMethod | keyof typeof ApiPath;

/**
 * Naver API Client
 */
class NaverApiClient {
    public static readonly ROOT_URL = "https://openapi.naver.com/v1";

    private readonly clientId: string;

    private readonly clientSecret: string;

    private readonly apiPath: typeof ApiPath;

    private readonly apiMethod: typeof ApiMethod;

    /**
     * Return Naver API Client
     * @param clientID {string} Naver API Client ID
     * @param clientSecret {string} Naver API Client Secret
     */
    public constructor(clientID: string, clientSecret: string) {
        this.clientId = clientID;
        this.clientSecret = clientSecret;
        this.apiPath = ApiPath;
        this.apiMethod = ApiMethod;
    }

    /**
     * Search Book from Naver API
     * (https://developers.naver.com/docs/serviceapi/search/book/book.md#%EC%B1%85)
     * @param option {BookSearchOption} Book Search Options
     * @return {Promise<SearchBookResult>} Search Result
     */
    public async searchBook(option: BookSearchOption) {
        const key = "SearchBook";
        return this.fetch<BookSearchOption, SearchBookResult>(key, option);
    }

    /**
     * Search Movie from Naver API
     * (https://developers.naver.com/docs/serviceapi/search/movie/movie.md#%EC%98%81%ED%99%94)
     * @param option {MovieSearchOption} Movie Search Options
     * @return {Promise<SearchMovieResult>} Search Result
     */
    public async searchMovie(option: MovieSearchOption) {
        const key = "SearchMovie";
        const processedOption = option;

        if (option.country) {
            const { country } = option;
            const enumKeys = getObjectKeys(NaverApiMovieCountry);

            if (enumKeys.includes(country as keyof typeof NaverApiMovieCountry)) {
                processedOption.country = NaverApiMovieCountry[country as keyof typeof NaverApiMovieCountry];
            }
        }

        if (option.genre) {
            const { genre } = option;
            const enumKeys = getObjectKeys(NaverApiMovieGenre);

            if (enumKeys.includes(genre as keyof typeof NaverApiMovieGenre)) {
                processedOption.genre = NaverApiMovieGenre[genre as keyof typeof NaverApiMovieGenre];
            }
        }

        return this.fetch<MovieSearchOption, SearchMovieResult>(key, processedOption);
    }

    private createURL<O extends SearchOption>(key: ApiKey, option: O) {
        const baseUrl = NaverApiClient.ROOT_URL + this.apiPath[key];
        const optionKeys = getObjectKeys(option);
        const params = new URLSearchParams();

        optionKeys.map((optionKey) => {
            const value = option[optionKey];
            params.set(optionKey as string, String(value));
        });
        return `${baseUrl}?${params.toString()}`;
    }

    private createHeader() {
        const headers = new Headers();
        headers.append("X-Naver-Client-Id", this.clientId);
        headers.append("X-Naver-Client-Secret", this.clientSecret);
        return headers;
    }

    private getMethod(key: ApiKey) {
        return this.apiMethod[key];
    }

    private async fetch<O extends SearchOption, R>(key: ApiKey, option: O) {
        const url = this.createURL(key, option);
        const method = this.getMethod(key);

        logger.info(`Execute Naver API: ${key} (${method} ${url})`);

        return fetchJson<R>(url, {
            method,
            headers: this.createHeader()
        });
    }
}

export default NaverApiClient;
export { BookSearchOption, MovieSearchOption };
