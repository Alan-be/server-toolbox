module.exports = {
  API_URL: process.env.API_URL || 'https://echo-serv.tbxnet.com/v1/secret/',
  API_KEY: process.env.API_KEY || 'Bearer aSuperSecretKey'
}

// The instructions state that the project does not depend on environment variables, it is recommended to use these for security but to follow the instructions I decided not to use a .env, but I managed it in an isolated file where I consume its API.
