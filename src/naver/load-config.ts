import { resolve } from "path";
import loadJson from "../util/load-json";
import { RESOURCE_PATH } from "../util/project-paths";
import NaverApiConfig from "../type/NaverApiConnfig";

const NAVER_API_CONFIG_PATH = resolve(RESOURCE_PATH, "naver.json");

/**
 * Load Naver API Configs
 */
const loadNaverApiConfig = async () => loadJson<NaverApiConfig>(NAVER_API_CONFIG_PATH);

export default loadNaverApiConfig;
