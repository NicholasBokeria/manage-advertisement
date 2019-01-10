const env = process.env.NODE_ENV || 'development'
console.log('env *********', env)

if (env === 'development') {
    let config = require('./config.json')
    var envConfig = config[env]

    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key]
    })
}

const login = "nika"
const password = "nika"

module.exports = {login, password}