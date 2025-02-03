const express = require('express')
const filesRoute = require('./routes/routes')

const app = express()

app.use(express.json())

app.use('/files', filesRoute)

module.exports = app
