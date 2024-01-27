import { rm } from "fs/promises";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const remove = async () => {
    const file = resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');
    try {
        await rm(file);
    } catch (err) {
        if (err?.code == "ENOENT") {
            console.error("FS operation failed");
        }
    }
};

await remove();