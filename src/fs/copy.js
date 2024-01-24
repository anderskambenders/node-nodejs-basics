import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';
import {cp} from 'fs/promises';

const copy = async () => {
    const src = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    const copy = resolve(dirname(fileURLToPath(import.meta.url)), 'files_copy');
    try {
        await cp(src, copy, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch (error) {
    if (error.code === 'ERR_FS_CP_EEXIST') {
        console.log('FS operation failed');
    }
    }
};

await copy();
