const mongoose = require('mongoose')
const Schema = mongoose.Schema


const profileUserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    skils: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    numTel: {
        type: String
    },
})
module.exports = Profile = mongoose.model('profile', profileUserSchema)