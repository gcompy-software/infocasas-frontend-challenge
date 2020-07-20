const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
    const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER

    const env = {
        SITE_NAME: "Todo-InfoCasas",
        API_TODO: (()=>{
            if (isDevelopment){
                return "https://my-json-server.typicode.com/gcompy-software/infocasas-frontend-challenge"
            } else {
                return "https://my-json-server.typicode.com/gcompy-software/infocasas-frontend-challenge"
            }
        })()
    }
    
    return {
        env,
    }
}

