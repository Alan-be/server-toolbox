const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')

router.use('/data',filesController.getFilesData)

module.exports = router