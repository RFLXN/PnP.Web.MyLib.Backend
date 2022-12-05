import fetch, { RequestInit } from "node-fetch";

/**
 * Fetch JSON From HTTP/HTTPS
 * @param url {string} URL
 * @param init {RequestInit} Http Method, Headers, or Etc...
 */
const fetchJson = async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    if (res.status != 200) {
        throw new Error(`HTTP Status Code: ${res.status}`);
    }

    return await res.json() as Promise<T>;
};

export default fetchJson;
