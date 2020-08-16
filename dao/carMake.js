const carMake = require('../model/carMake');

async function getCarMakes() {
    try {
        const cardata = await carMake.find({});
        return { value: cardata }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getCarMakes' } } }
    }
}

module.exports = {
    getCarMakes
}