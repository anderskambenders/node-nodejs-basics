import { Worker } from "worker_threads";
import path, { dirname } from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const coreNum = os.cpus().length;
    const execFile = path.join(dir, "worker.js");
    const calculations = [];

    for (let i = 0; i < coreNum; i += 1) {
        const calculation = new Promise((resolve, reject) => {
            const worker = new Worker(execFile, { workerData: i + 10 });
            worker.on("message", (result) => resolve({ status: "resolved", data: result }));
            worker.on("error", (error) => reject({ status: "error", data: error }));
        });
        calculations.push(calculation);
    }

    Promise.all(calculations).then((data) => console.log(data)).catch((e) => console.error(e));
};

await performCalculations();