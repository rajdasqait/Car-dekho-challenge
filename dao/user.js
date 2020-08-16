const user = require('../model/user');

async function registerUser(userObject) {
    try {
        if (userObject) {
            const register = await user.findOneAndUpdate({ email: userObject.email }, userObject, { new: true, upsert: true });
            return { value: register }
        }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'registerUser' } } }
    }
}

async function loginUser(loginObject) {
    try {
        if (loginObject) {
            const login = await user.findOne({ userName: loginObject.userName, password: loginObject.password });
            if (login) {
                return { value: 'User logged in successfully!' }
            } else {
                return { error: 'Please check the user credentials!!' }
            }
        }
    } catch (error) {
        return { error: { type: 'error', ...error, location: { file: __filename, function: 'loginUser' } } }
    }
}

module.exports = {
    registerUser,
    loginUser
}