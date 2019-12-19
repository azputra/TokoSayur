'use strict';

const bcrypt = require('bcrypt');

function checkPassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = checkPassword;