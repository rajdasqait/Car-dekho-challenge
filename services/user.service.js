const UserDao = require('../dao/user');

async function registerUser(userObject) {
    try {
        const { value, error } = await UserDao.registerUser(userObject);
        if (error) {
            return { error: error }
        }
        return { value }
    } catch (error) {
        return { error: { type: 'error', ...error.spread(), location: { file: __filename, function: 'registerUser' } } }
    }
}

async function login(loginObject) {
    try {
        const { value, error } = await UserDao.loginUser(loginObject);
        if (error) {
            return { error: error }
        }
        return { value }
    } catch (error) {
        return { error: { type: 'error', ...error.spread(), location: { file: __filename, function: 'login' } } }
    }
}

module.exports = {
    registerUser,
    login
}