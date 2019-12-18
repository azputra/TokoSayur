'use strict';

const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

router.get('/items', ItemController.getItemsAll);
router.get('/items/add', ItemController.getItemsAdd);
router.post('/items/add', ItemController.postItemsAdd);
router.get('/items/edit/:id', ItemController.getItemsEdit);
router.post('/items/edit/:id', ItemController.postItemsAdd);
router.get('/items/delete/:id', ItemController.getItemDelete);


module.exports = router;