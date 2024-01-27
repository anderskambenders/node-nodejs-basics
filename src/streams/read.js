import { createReadStream } from "fs";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const read = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(directory, 'files', 'fileToRead.txt');
    const readableStream = createReadStream(filePath, { encoding: 'utf-8' });
    readableStream.on('error', (error) => {
        console.log(`${error.message}`);
    })

    readableStream.on('data', (data) => {
        console.log(data);
    })
};

await read();