"use strict"

const express = require('express')
const app = express()
let PORT = process.env.PORT || 4000; //port heroku
const router = require('./routes')
const bodyparser = require('body-parser')

const checkPassword = require('./helpers/checkPassword');
const generateHashPassword = require('./helpers/generateHashPassword');
const sendMail = require('./helpers/sendMail');
const session = require('express-session');

app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.locals.checkPassword = checkPassword;
app.locals.generateHashPassword = generateHashPassword;
app.locals.sendMail = sendMail;

app.use('/', router.HomeRouter);
app.use('/items', router.ItemRouter);
app.use('/orders', router.OrderRouter);
app.use('/users', router.UserRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))