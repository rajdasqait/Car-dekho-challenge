const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp')

const carMake = new Schema({
    make_id: { type: String, required: true },
    make_display: { type: String },
    make_is_common: { type: Number },
    make_country: { type: String },
    make_year: { type: Number }
})
carMake.index({ make_id: 1 }, { unique: true })
carMake.plugin(timestamps)

module.exports = mongoose.model('carmakes', carMake)