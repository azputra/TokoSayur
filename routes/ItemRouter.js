'use strict';

const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

router.get('/', ItemController.getItemsAll);
router.get('/add', ItemController.getItemsAdd);
router.post('/add', ItemController.postItemsAdd);
router.get('/edit/:id', ItemController.getItemsEdit);
router.post('/edit/:id', ItemController.postItemsAdd);
router.get('/delete/:id', ItemController.getItemDelete);


module.exports = router;