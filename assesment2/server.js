const express = require('express')
const app = express()
var cors = require('cors')

port = 4000
app.use(cors())
app.use('/api', require('./routes/dataRoutes'))

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`)
})