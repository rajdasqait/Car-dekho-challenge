const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp')

const carModel = new Schema({
    model_name: { type: Number, required: true },
    model_make_id: { type: String }
})
carModel.plugin(timestamps)

module.exports = mongoose.model('carmodels', carModel)