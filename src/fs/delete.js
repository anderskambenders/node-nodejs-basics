import { resolve, dirname } from "path";
import {fileURLToPath} from "url";
import { rm } from "fs/promises";

const remove = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(dir, "files", "fileToRemove.txt");
    try {
        await rm(filePath);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('FS operation failed.');
        }
    }
};

await remove();