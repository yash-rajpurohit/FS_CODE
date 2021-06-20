const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    
    firstname: {
        type: String,
        required: true
    },
    
    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('User', UserSchema)