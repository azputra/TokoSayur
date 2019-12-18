'use strict';

const generateSalt = require('../helpers/generateSalt')
const generateHashPassword = require('../helpers/generateHashPassword')

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
         let salt = generateSalt();
         user.setDataValue('salt', salt);
         user.setDataValue('password', generateHashPassword(user.password, salt));
         let randomNumber = Math.floor(Math.random() * 1000) + 1;
         user.username = user.firstname + user.lastname + randomNumber;
      },

    },
    sequelize
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Item, {through: models.Order})
  };
  return User;
};