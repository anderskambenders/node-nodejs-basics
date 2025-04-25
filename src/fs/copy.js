import { resolve, dirname } from "path";
import {cp} from "fs/promises";
import { fileURLToPath } from "url";

const copy = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const source = resolve(dir, "files");
    const copy =resolve(dir, "files_copy");
    try {
        await cp(source, copy, {recursive: true, force: false, errorOnExist: true});
    }
    catch (err) {
        console.log('FS operation failed.');
    }
};

await copy();
