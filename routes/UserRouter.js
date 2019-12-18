'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/admin', UserController.getUsersAll);
router.get('/add', UserController.getUsersAdd);
router.post('/add', UserController.postUsersAdd);
router.get('/edit/:id', UserController.getUsersEdit);
router.post('/edit/:id', UserController.postUsersEdit);
router.get('/delete/:id', UserController.getUsersDelete);

module.exports = router;