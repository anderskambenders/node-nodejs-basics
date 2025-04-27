import { createHash } from "crypto";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const calculateHash = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(dir, "files", "fileToCalculateHashFr.txt");
    try {
        const data = await readFile(filePath, 'utf-8');
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    }
    catch (err) {
        console.log(`FS operation failed.\n${err.message}`);
    }
};
await calculateHash();