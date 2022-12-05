import { readdir } from "fs/promises";
import { relative, resolve } from "path";
import { fileURLToPath } from "url";
import Router from "./type/Router";
import { PROJECT_ROOT } from "./util/project-paths";
import logger from "./logger";

// Same to __filename (Node.js ES Module Resolution Make __dirname Not Working)
const FILE_PATH = fileURLToPath(import.meta.url);
const ROUTER_ROOT_PATH = resolve(PROJECT_ROOT, "router");

/**
 * Async Generator Function for Traverse Directory Recursively and Get Full File Path
 */
async function* getFiles(dir: string): AsyncGenerator<string> {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
}

/**
 * Load Routers Dynamically
 */
const loadRouters = async (): Promise<Router[]> => {
    const routers: Router[] = [];

    for await (const file of await getFiles(ROUTER_ROOT_PATH)) {
        if (file.endsWith(".router.js")) {
            const relativeFilePath = relative(FILE_PATH, file)
                .replace("..", ".")
                .replaceAll("\\", "/");
            try {
                const raw = (await import(relativeFilePath)) as Router;
                routers.push({
                    method: raw.method,
                    path: raw.path,
                    handler: raw.handler
                });
                logger.info(`Load Router: '${raw.path}' from '${file}'`);
            } catch (e) {
                logger.error(`Failed to Import Router: ${file}`);
                logger.error(e);
            }
        }
    }

    return routers;
};

export default loadRouters;
