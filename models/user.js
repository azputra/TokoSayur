'use strict';

const generateHashPassword = require('../helpers/generateHashPassword');
const sendMail = require('../helpers/sendMail');

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model { }

  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
         user.setDataValue('password', generateHashPassword(user.password));

         let randomNumber = Math.floor(Math.random() * 1000) + 1;
         user.username = user.firstname + user.lastname + randomNumber;
      },
      afterCreate: (user) => {
        let email = user.email
        let message = `Hello ${user.firstname} ${user.lastname}, your username is '${user.username}'.
Welcome to Toko Sayur. May you have enjoyable life.`
        sendMail(email, message)
      }
    },
    sequelize
  });
  User.associate = function (models) {
    // associations can be defined here
    // User.hasMany(models.Order)
    User.belongsToMany(models.Item, {through: models.Order})
  };
  return User;
};