import { readdir } from "fs/promises";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const list = async () => {
    const directory = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    try {
        const files = await readdir(directory);
        for (let file of files) {
        console.log(file);
        }
    } catch (error) {
        if (error.code === "ENOENT") {
        console.error('FS operation failed');
        }
    }
};

await list();