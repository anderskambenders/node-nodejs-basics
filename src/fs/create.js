import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { writeFile } from 'fs/promises';

const create = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(directory, 'files', 'fresh.txt');
    const text = 'I am fresh and young';
    try {
        await writeFile(filePath, text, { flag: 'wx' })
    }
    catch (error) {
        if (error.code === 'EEXIST') {
            console.log('FS operation failed')
        }
    }
};

await create();