"use strict"

const express = require('express')
const router = require('express').Router()

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get("/", (req, res) => {
    res.render("index")
})

module.exports = router