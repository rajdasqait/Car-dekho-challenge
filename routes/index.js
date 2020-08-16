const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');

router.post('/user/login', async (req, res) => {
    try {
        console.log('user login route')
        const { value, error } = await UserService.login(req.body);
        if (error) {
            res.status(500).json({ response: null, message: error });
        }
        else {
            res.status(200).json({ response: value, message: "Users logged in successfully!!" })
        }
    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

router.post('/user/register', async (req, res) => {
    try {
        const { value, error } = await UserService.registerUser(req.body);
        if (error) {
            res.status(500).json({ response: null, message: error });
        }
        else {
            res.status(200).json({ response: value, message: "Users added Successfully" })
        }
    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

router.post('/car/details', async (req, res) => {
    try {
        console.log('car details route')
        // const { value, error } = await RegisterService.registerUser(req.body);
        // if (error) {
        //     res.status(500).json({ response: null, message: error });
        // }
        // else {
        //     res.status(200).json({ response: value, message: "Users added Successfully" })
        // }
    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

module.exports = router