import loadConfig from "./load-config";
import NaverApiClient from "./api-client";

let client: NaverApiClient;

/**
 * Load Naver API Configs and Client
 */
const loadClient = async () => {
    const {
        clientId,
        clientSecret
    } = await loadConfig();
    client = new NaverApiClient(clientId, clientSecret);
};

/**
 * Get Naver API Client
 * @return {NaverApiClient} Naver API Client
 */
const getClient = () => client;

export default getClient;
export { loadClient };
