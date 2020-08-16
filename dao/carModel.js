const carModel = require('../model/carModel');

async function getCarModel(model_make_id) {
    try {
        if (model_make_id) {
            const model = await carModel.find({ model_make_id });
            return { value: model }
        }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getCarModel' } } }
    }
}

module.exports = {
    getCarModel
}