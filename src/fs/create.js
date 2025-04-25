import { writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const filePath = resolve(dir, "files", "fresh.txt");
  try {
    await writeFile(filePath, "I`m fresh and young!", {flag:'wx'});
  }
  catch (err) {
    if (err.code === 'EEXIST') {
      console.log('FS operation failed.');
    }
  }
};

await create();