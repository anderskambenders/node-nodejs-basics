import { dirname, resolve } from "path";
import { rename as rn } from "fs/promises";
import { fileURLToPath } from "url";


const rename = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const oldFileName = resolve(dir, "files", 'wrongFilename.txt');
    const newFileName = resolve(dir, "files", 'properFilename.md');
    try {
        await rn(oldFileName, newFileName);
    }
    catch (err) {
        console.log('FS operation failed.')
    }
};

await rename();