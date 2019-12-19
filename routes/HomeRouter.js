'use strict';

const express = require('express');
const router = express.Router();
const Item = require('../models').Item

router.get('/', (req, res) => {
    Item.findAll()
        .then((items) => {
            res.render('index', { items })
        }).catch((err) => {
            res.send(err)
        });
})

module.exports = router;