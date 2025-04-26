const parseArgs = () => {
    const args = process.argv;
    args.map((item, index) => {
        if (item.startsWith('--') && args[index + 1])
            console.log(`${item.replace('--', '')} is ${args[index + 1]}`);
    });
};

parseArgs();