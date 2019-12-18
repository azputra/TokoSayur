'use strict';

const User = require('../models').User;

class UserController {
    static getUsersAll(req, res) {
        User.findAll({})
        .then(users => {
            res.render('./adminForm/users', {
                userData : users
            })
        })
        .catch(err => {
            res.render('users/usersError', {
                message: err.message
            })
        })
    }

    static getUsersAdd(req, res) {
        res.render('signUp')
    }

    static postUsersAdd(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const role = req.body.role;
        const email = req.body.email;
        const password = req.body.password;

        User.create({
            firstname,
            lastname,
            password,
            role,
            email
        })
        .then(() => {
            res.redirect('/users/add')
        })
        .catch(err => {
            res.render('users/usersError', {
                message: err.message
            })
        })
    }

    static getUsersEdit(req, res) {
        const userId = req.params.id;

        user.findByPk(userId)
        .then(user => {
            res.render('')
        })
        .catch(err => {
            res.render('users/usersError', {
                message: err.message
            })
        })
    }

    static postUsersEdit(req, res) {
        const userId = req.params.id;
        let update = {};

        for(let key in req.body) {
            if(req.body[key].length > 0) {
                update[key] = req.body[key]
            }
        }

        User.update(update, {
            where: {
                id: userid
            }
        })
        .then(() => {
            res.redirect('/users')
        })
        .catch(err => {
            res.render('users/usersError', {
                message: err.message
            })
        })
    }

    static getUsersDelete(req, res) {
        const userId = req.params.id;

        User.destroy({
            where: {
                id: userId
            }
        })
        .then(() => {
            res.redirect('/users')
        })
        .catch(err => {
            res.render('users/usersError', {
                message: err.message
            })
        })
    }
}

module.exports = UserController;