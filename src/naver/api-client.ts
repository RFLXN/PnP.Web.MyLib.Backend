import { Headers } from "node-fetch";
import fetchJson from "../util/fetch-json";
import getObjectKeys from "../util/object-key";
import { SearchBookResult } from "../type/NaverApiExecuteResult";
import logger from "../logger";

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

enum ApiPath {
    SearchBook = "/search/book.json"
}

enum ApiMethod {
    SearchBook = "GET"
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
     * @param option {BookSearchOption} Book Search Options
     */
    public async searchBook(option: BookSearchOption) {
        const key = "SearchBook";
        return this.fetch<BookSearchOption, SearchBookResult>(key, option);
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
export { BookSearchOption };
