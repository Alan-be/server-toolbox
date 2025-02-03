const axios = require('axios')
const config = require('../config')
exports.getFiles = async () => {
  try {
    const response = await axios.get(`${config.API_URL}files`, {
      headers: {
        authorization: config.API_KEY
      }
    })

    return response.data.files || []
  } catch (error) {
    console.log('An error occurred while fetching files: ', error.message)
    throw new Error('Failed to get file list ')
  }
}

exports.downloadFiles = async (fileName) => {
  try {
    const response = await axios.get(`${config.API_URL}file/${fileName}`, {
      headers: {
        authorization: config.API_KEY
      }
    })

    return response.data
  } catch (error) {
    console.log(`An error occurred while downloading the file ${fileName}:`, error.message)
    return null
  }
}
