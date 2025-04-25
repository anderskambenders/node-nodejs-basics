import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const read = async () => {
    const filePath = resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    try {
        const data = await readFile(filePath, 'utf-8');
        console.log(data);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('FS operation failed.');
        }
    }
};

await read();