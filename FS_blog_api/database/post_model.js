const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    
    heading: {
        type: String,
        required: true
    },
    
    blog: {
        type: String,
        required: true
    },

    userID: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Post', PostSchema)