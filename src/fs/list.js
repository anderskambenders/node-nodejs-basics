import { fileURLToPath } from "url";
import {readdir} from "fs/promises";
import { dirname, resolve } from "path";

const list = async () => {
    const dir = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    try {
        const list = await readdir(dir);
        for (const file of list) {
            console.log(file);
        }
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('FS operation failed.');
        }
    }

};

await list();