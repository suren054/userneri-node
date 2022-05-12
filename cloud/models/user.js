const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
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
    },
    role: {
        type: String,
        required: true,
    },
    art_manager: {
        type: Boolean,
        required: true,
        default: false,
    },

}, { versionKey: false })

module.exports = mongoose.model('User', User)