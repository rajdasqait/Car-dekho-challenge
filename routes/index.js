const express = require('express');
const router = express.Router();
// const RegisterService = require('../services/register.service');

router.post('/user/login', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

router.post('/user/register', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

router.post('/car/details', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ response: null, message: error });
    }
})

module.exports = router