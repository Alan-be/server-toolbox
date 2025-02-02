const app = require('./src/app')
const port = 3007

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
