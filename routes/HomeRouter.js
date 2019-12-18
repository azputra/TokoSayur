'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/users/add', (req, res) => {
    res.render('signUp')
})

module.exports = router;