import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Same to __dirname (Node.js ES Module Resolution (package.json "type": "module") Make __dirname Not Working)
const HERE = dirname(fileURLToPath(import.meta.url));

/**
 * Project Source Root Path
 */
const PROJECT_ROOT = resolve(HERE, "..");

/**
 * Project Resource Path
 */
const RESOURCE_PATH = resolve(PROJECT_ROOT, "../resource");

export {
    PROJECT_ROOT,
    RESOURCE_PATH
};
