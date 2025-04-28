import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const spawnChildProcess = async (args) => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(directory, 'files', 'script.js');
    fork(filePath, args);
};

spawnChildProcess( [12, 24, 36]);
