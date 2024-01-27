import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const file  = path.join(dir, 'files', 'fileToCompress.txt');
    const zip = path.join(dir, 'files', 'archive.gz');
    const input = createReadStream(file);
    const output = createWriteStream(zip);
    input.pipe(createGzip()).pipe(output);
};

await compress();