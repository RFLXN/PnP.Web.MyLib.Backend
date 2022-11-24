import { PathLike, promises as fs } from "fs";
import { OpenMode } from "node:fs";
import { Abortable } from "node:events";

type ReadFileOption = | ({
    encoding?: null | undefined;
    flag?: OpenMode | undefined;
} & Abortable);

const loadJson = async <T>(path: PathLike, option?: ReadFileOption) => {
    const raw = await fs.readFile(path, option);
    return JSON.parse(raw.toString(option?.encoding)) as T;
};

export default loadJson;
