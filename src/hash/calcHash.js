import { readFile } from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const file = path.join(directory, 'files', 'fileToCalculateHashFor.txt');
    try {
        const fileText = await readFile(file, { encoding: 'utf8' });
        const hash = createHash('sha256').update(fileText).digest('hex');
        console.log(hash);
    } catch(error) {
        console.error(error.message);
    }

};
await calculateHash();