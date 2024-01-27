import { readFile } from "fs/promises";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const read = async () => {
    const file = resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    try {
        const text = await readFile(file, "utf8");
        console.log(text);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("FS operation failed");
        }
    }
};

await read();