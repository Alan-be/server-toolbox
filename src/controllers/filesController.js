const apiServies = require('../services/apis.js')
const { parseFile } = require('../utils/utils.js')

exports.getFilesData = async (req, res) => {
  try {
    const results = []
    const filesList = await apiServies.getFiles()

    for (const fileName of filesList) {
      const fileContent = await apiServies.downloadFiles(fileName)

      if (fileContent) {
        const parseData = parseFile(fileContent, fileName)
        if (parseData) {
          results.push(parseData)
        }
      }
    }

    res.status(200).json({
      status: 'success',
      data: results
    })
  } catch (error) {
    console.log('An error ocurred while fetching files: ', error.message)
    res.status(500).json({
      status: 'error',
      message: 'Failed to get file list'
    })
  }
}
