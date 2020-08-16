const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const CarService = require('../services/car.service');

router.post('/user/login', async (req, res) => {
    try {
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
            res.status(200).json({ response: value, message: "Users registered Successfully" })
        }
    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

router.post('/car/details', async (req, res) => {
    try {
        if (req.query.cmd === 'getMakes') {
            const { value, error } = await CarService.getMakeList();
            if (error) {
                res.status(500).json({ response: null, message: error });
            }
            else {
                res.status(200).json({ response: value, message: "Make data fetched successfully!" })
            }
        } else if (req.query.cmd === 'getModels') {
            const { value, error } = await CarService.getModelDetails(req.query.make);
            if (error) {
                res.status(500).json({ response: null, message: error });
            }
            else {
                res.status(200).json({ response: value, message: "Models data fetched Successfully!" })
            }
        } else if (req.query.cmd === 'getTrims') {
            console.log('Entered getTrims');
            const { value, error } = await CarService.getTrimDetails(req.query.make, req.query.model);
            if (error) {
                res.status(500).json({ response: null, message: error });
            }
            else {
                res.status(200).json({ response: value, message: "Models data fetched Successfully!" })
            }
        }
    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

module.exports = router