import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const file  = path.join(dir, 'files', 'fileToCompress.txt');
    const zip = path.join(dir, 'files', 'archive.gz');
    const input = createReadStream(zip);
    const output = createWriteStream(file);
    input.pipe(createUnzip()).pipe(output);
};

await decompress();
