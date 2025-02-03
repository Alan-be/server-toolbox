const express = require('express')
const cors = require('cors')
const filesRoute = require('./routes/routes')

const app = express()

app.use(express.json())

app.use(cors({}))

app.use('/files', filesRoute)

module.exports = app
