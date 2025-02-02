const express = require('express')

const app = express()

app.use(express.json())

// app.use('/files',filesRoutes)

module.exports = app