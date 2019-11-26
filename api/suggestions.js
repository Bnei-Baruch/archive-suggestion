const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/get', async (request, response) => {
    try {

    } catch (err) {
        response.status(err.status).json(err.data);
    }
});

module.exports = router;