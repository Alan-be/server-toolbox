const apiServies = require('../services/apis.js')
const { parseFile } = require('../utils/utils.js')

exports.getFilesData = async (req, res) => {
    try {
      const { fileName } = req.query;
      const results = [];
      const filesList = await apiServies.getFiles();
  
      const filteredFilesList = fileName ? filesList.filter(file => file === fileName) : filesList;
  
      for (const fileName of filteredFilesList) {
        const fileContent = await apiServies.downloadFiles(fileName);
  
        if (fileContent) {
          const parseData = parseFile(fileContent, fileName);
          if (parseData) {
            results.push(parseData);
          }
        }
      }
  
      res.status(200).json({
        status: 'success',
        data: results
      });
    } catch (error) {
      console.log('An error ocurred while fetching files: ', error.message);
      res.status(500).json({
        status: 'error',
        message: 'Failed to get file list'
      });
    }
  };


exports.getListFiles = async(req,res) => {
    try {

        const filesList = await apiServies.getFiles()

        res.status(200).json({
            status: 'success',
            data: filesList
          })

        
    } catch (error) {
        console.log('An error ocurred while fetching files: ', error.message)
        res.status(500).json({
          status: 'error',
          message: 'Failed to get file list'
        })
        
    }

}