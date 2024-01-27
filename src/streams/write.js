import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const write = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(directory, 'files', 'fileToWrite.txt');
    const stream = createWriteStream(filePath);

    stdin.pipe(stream);

    stream.on('error', (error) => {
        console.error(error.message);
    });
};

await write();
