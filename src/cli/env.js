const parseEnv = () => {
    const envVars = Object.keys(process.env).filter(item => item.startsWith('RSS_'));
    envVars.map(item => {
        console.log(`${item}=${process.env[item]}`)
    })
};

parseEnv();