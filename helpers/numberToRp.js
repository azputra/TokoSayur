"use strict"

function changePrice(x) {
    return "Rp." + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = changePrice