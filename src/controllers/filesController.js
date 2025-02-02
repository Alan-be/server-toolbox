const apiServies = require('../services/apis.js')


exports.getFilesData = async (req,res) => {
    try{
        const filesList = await apiServies.getFiles()

        const fileContent = await apiServies.downloadFiles(filesList[1])
        console.log(fileContent,"response");
        
        
        res.json(fileContent)

    }catch(error){
        console.log('An error ocurred while fetching files: ',error.message)
        throw new Error('Failed to get file list ')
    }
}