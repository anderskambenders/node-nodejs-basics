import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import { stdin } from "process";

const write = async () => {
    const fileToRead = resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(fileToRead);
    stdin.pipe(writeStream);
    writeStream.on('error', (err) => {
        console.log(err.message);
    })

};

await write();