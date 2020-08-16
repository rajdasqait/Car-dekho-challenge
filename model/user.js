const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp')

const users = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    displayName: { type: String, required: true },
    mobileNumber: { type: String }
})
users.index({ email: 1 }, { unique: true })
users.plugin(timestamps)

module.exports = mongoose.model('users', users)