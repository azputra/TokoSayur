'use strict';

function generateSalt() {
    return String(Math.random() * 10000000);
}

module.exports = generateSalt;