const carTrim = require('../model/carTrim');

async function getTrims(model_make_id, model_name) {
    try {
        const trimData = await carTrim.find({ model_make_id, model_name });
        return { value: trimData }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getTrims' } } }
    }
}

module.exports = {
    getTrims
}