import loadConfig from "./load-config";
import NaverApiClient from "./api-client";

let client: NaverApiClient;

const loadClient = async () => {
    const {
        clientId,
        clientSecret
    } = await loadConfig();
    client = new NaverApiClient(clientId, clientSecret);
};

const getClient = () => client;

export default getClient;
export { loadClient };
