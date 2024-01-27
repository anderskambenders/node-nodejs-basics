import {dirname, join, resolve} from 'path';
import {fileURLToPath} from 'url';
import {readdir, rename as fileRename} from 'fs/promises';

const rename = async () => {
    const path = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const src = resolve(path, 'wrongFilename.txt');
    const renamedFile = resolve(path, 'properFilename.md');
    try {
        const files = await readdir(path);
        if (files.includes('properFilename.md')) {
            throw new Error('EEXIST');
        }
        await fileRename(src, renamedFile);
    } catch (error) {
        if (error.message === 'EEXIST' || error.code === 'ENOENT') {
        console.error('FS operation failed');
    }
    }
};

await rename();