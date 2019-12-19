'use strict';

function checkAdmin(req, res, next) {
    if(req.session.role) {
        if(req.session.role == 'admin') {
            next();
        } else {
            req.session.destroy();
            res.redirect('/users/add');
        }
    } else {
        next()
    }
}

module.exports = checkAdmin;