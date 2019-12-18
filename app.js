"use strict"

const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use('/items', router.ItemRouter);
app.use('/orders', router.OrderRouter);
app.use('/users', router.UserRouter);

app.set('view engine', 'ejs')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => console.log(`Example app listening on port ${port}!`))