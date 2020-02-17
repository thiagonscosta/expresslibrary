var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: toString,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)