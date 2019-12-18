'use strict';

const User = require('../models').User;

class UserController {
    static getUsersAll(req, res) {
        User.findAll({})
        .then(users => {
            res.render('users', {
                userData : users
            })
        })
        .catch(err => {
            res.render('users', {
                message: err.message
            })
        })
    }

    static getUsersAdd(req, res) {
        res.render('userAdd')
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
            res.render('')
        })
        .catch(err => {
            res.send(err.message)
        })
    }

    static getUsersEdit(req, res) {
        const userId = req.params.id;

        user.findByPk(userId)
        .then(user => {
            res.render('')
        })
        .catch(err => {
            res.send(err.message)
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
            res.send(err.message)
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
            res.send(err.message)
        })
    }
}

module.exports = UserController;