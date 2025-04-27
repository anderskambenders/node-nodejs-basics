import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const read = async () => {
    const fileToRead = resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    const readableStream = createReadStream(fileToRead);
    readableStream.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    readableStream.on('error', (err) => {
        console.log(err.message);
    });
};

await read();