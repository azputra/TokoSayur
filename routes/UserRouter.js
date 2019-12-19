'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const checkAdmin = require('../middlewares/checkAdmin')

router.post('/login', UserController.login);
router.get('/admin', checkAdmin, UserController.getUsersAll);
router.get('/add', checkAdmin, UserController.getUsersAdd);
router.post('/add', checkAdmin, UserController.postUsersAdd);
router.get('/edit/:id', checkAdmin, UserController.getUsersEdit);
router.post('/edit/:id', checkAdmin, UserController.postUsersEdit);
router.get('/delete/:id', checkAdmin, UserController.getUsersDelete);

module.exports = router;