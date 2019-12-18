'use strict';

const crypto = require('crypto');

function generateHashPassword(password, salt) {
    return crypto.createHmac('sha256', salt)
                 .update(password)
                 .digest('hex')
}

module.exports = generateHashPassword;