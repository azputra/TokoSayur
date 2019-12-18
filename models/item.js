'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Item extends Model { }

  Item.init({
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize
  });
  Item.associate = function (models) {
    // associations can be defined here
  };
  return Item;
};