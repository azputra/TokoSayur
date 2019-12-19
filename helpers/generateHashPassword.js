'use strict';

const bcrypt = require('bcrypt');

function generateHashPassword(password) {
    let salt = 10;
    return bcrypt.hashSync(password, salt);
}

module.exports = generateHashPassword;