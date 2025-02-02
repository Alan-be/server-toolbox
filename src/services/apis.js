const axios = require('axios')
exports.getFiles = async () => {
    try {
        const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files',{
            headers:{
                'authorization': "Bearer aSuperSecretKey",
            }
        })

        return response.data.files || []
    } catch (error) {
        console.log('An error occurred while fetching files: ',error.message)
        throw new Error('Failed to get file list ')
        
    }
}

exports.downloadFiles= async (fileName) => {
    try {
        
        const response = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`,{
            headers: {
                'authorization': "Bearer aSuperSecretKey",
            }
        })

        return response.data
        
      
        
    } catch (error) {
        console.log('An error occurred while downloading the file: ',error)
        throw new Error('An error occurred while downloading the file')

        
    }
}