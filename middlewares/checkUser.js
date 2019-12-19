'use strict';

function checkUser(req, res, next) {
    if (req.session.role) {
        if (req.session.role == 'user') {
            next();
        } else {
            req.session.destroy();
            res.redirect('/users/add');
        }
    } else {
        res.redirect('/users/add');
    }
}

module.exports = checkUser;