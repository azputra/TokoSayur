'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const checkAdmin = require('../middlewares/checkAdmin');
const checkUser = require('../middlewares/checkUser');

router.get('/login', UserController.getLogin);
router.post('/login', UserController.postLogin);
router.get('/admin', checkAdmin, UserController.getUsersAll);
router.get('/add', checkAdmin, UserController.getUsersAdd);
router.post('/add', checkAdmin, UserController.postUsersAdd);
router.get('/edit/:id', checkAdmin, UserController.getUsersEdit);
router.post('/edit/:id', checkAdmin, UserController.postUsersEdit);
router.get('/delete/:id', checkAdmin, UserController.getUsersDelete);
router.get('/logout', UserController.logout);

module.exports = router;