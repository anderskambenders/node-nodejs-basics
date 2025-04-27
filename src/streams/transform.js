import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const transformInput = new Transform({
        transform(chunk, _, callback) {
            this.push(chunk.reverse().toString() + '\n');
            callback();
        }
    })
    stdin.pipe(transformInput).pipe(stdout);
};

await transform();