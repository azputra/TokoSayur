'use strict';

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const checkUser = require('../middlewares/checkUser');

router.get('/', checkUser, OrderController.getOrders);
router.get('/update', checkUser, OrderController.updateStatusOrder);

module.exports = router;