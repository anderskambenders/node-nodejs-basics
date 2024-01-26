import { Transform } from 'stream';

const transform = async () => {
    const inp = new Transform({
        transform(chunk, _, callback) {
            this.push(chunk.reverse().toString() + '\n');
            callback();
        }
    });
    process.stdin.pipe(inp).pipe(process.stdout);
};

await transform();