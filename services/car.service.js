const CarMakeDao = require('../dao/carMake');
const CarModelDao = require('../dao/carModel');
const CarTrimDao = require('../dao/carTrim');

async function getMakeList() {
    try {
        const { value, error } = await CarMakeDao.getCarMakes();
        if (error) {
            return { error: error }
        }
        return { value }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getMakeList' } } }
    }
}

async function getModelDetails(make) {
    try {
        const { value, error } = await CarModelDao.getCarModel(make);
        if (error) {
            return { error: error }
        }
        return { value }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getModelDetails' } } }
    }
}

async function getTrimDetails(make, model) {
    try {
        const { value, error } = await CarTrimDao.getTrims(make, model)
        if (error) {
            return { error: error }
        }
        return { value }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'getTrimDetails' } } }
    }
}

module.exports = {
    getMakeList,
    getModelDetails,
    getTrimDetails
}