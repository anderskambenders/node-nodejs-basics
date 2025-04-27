import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const coreNum = cpus().length;
    const exeFile = path.join(dir, 'worker.js');
    const calculations = [];
    for (let i = 0; i < coreNum; i +=1) {
        const calc = new Promise((resolve, reject) => {
            const worker = new Worker(exeFile, { workerData: i + 10 });
            worker.on('message', (result) => resolve({ status: 'resolved', data: result }))
            worker.on('error', () => reject({ status: 'error', data: null }))
        })
        calculations.push(calc)
    }
    Promise.all(calculations).then((data) => console.log(data)).catch((err) => console.log(err));

};

await performCalculations();
