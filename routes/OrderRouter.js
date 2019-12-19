'use strict';

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const checkUser = require('../middlewares/checkUser');

router.get('/', checkUser, OrderController.getOrders);
router.post('/update', checkUser, OrderController.updateStatusOrder);
router.post('/add/:id', checkUser, OrderController.addItemToOrder)

module.exports = router;