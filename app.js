"use strict"

const express = require('express')
const app = express()
const port = 4000
const router = require('./routes')

const generateSalt = require('./helpers/generateSalt');
const generateHashPassword = require('./helpers/generateHashPassword');

 app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.locals.generateSalt = generateSalt;
app.locals.generateHashPassword = generateHashPassword;
  
app.use('/', router.HomeRouter);
app.use('/items', router.ItemRouter);
app.use('/orders', router.OrderRouter);
app.use('/users', router.UserRouter);


app.set('view engine', 'ejs')



app.listen(port, () => console.log(`App listening on port ${port}!`))