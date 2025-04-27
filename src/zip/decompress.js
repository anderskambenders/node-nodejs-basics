import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const file = resolve(dir, "files", "fileToCompress.txt");
    const zip = resolve(dir, "files", "archive.gz");
    const input = createReadStream(zip);
    const output = createWriteStream(file);
    input.pipe(createGunzip()).pipe(output);
};

await decompress();