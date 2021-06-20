const express = require('express')
const app = express()
const authRoute = require('./routes/user_auth')
const adminRoute = require('./routes/admin_auth')
const postRoute = require('./routes/user_post')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

port = 3000

app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/blog_database', 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
    () => {
        console.log('database connected')
    })


    app.use('/api/auth', authRoute)
    app.use('/api/admin/auth', adminRoute)
    app.use('/api/post', postRoute)
    
app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`)
})