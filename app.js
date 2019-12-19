"use strict"

const express = require('express')
const app = express()
let PORT = process.env.PORT || 3000; //port heroku
const router = require('./routes')

const generateSalt = require('./helpers/generateSalt');
const generateHashPassword = require('./helpers/generateHashPassword');
const sendMail = require('./helpers/sendMail');

app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.locals.generateSalt = generateSalt;
app.locals.generateHashPassword = generateHashPassword;
app.locals.sendMail = sendMail;

app.use('/', router.HomeRouter);
app.use('/items', router.ItemRouter);
app.use('/orders', router.OrderRouter);
app.use('/users', router.UserRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))