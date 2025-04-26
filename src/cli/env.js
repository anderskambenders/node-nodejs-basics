const parseEnv = () => {
    const vars = Object.keys(process.env).filter(item => item.startsWith('RSS_'));
    vars.map(item => {
        console.log(`${item}=${process.env[item]}`)
    })
};

parseEnv();