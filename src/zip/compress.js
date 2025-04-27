import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const file = resolve(dir, "files", "fileToCompress.txt");
    const zip = resolve(dir, "files", "archive.gz");
    const input = createReadStream(file);
    const output = createWriteStream(zip);
    input.pipe(createGzip()).pipe(output);
};

await compress();