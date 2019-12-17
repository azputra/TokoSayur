'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Order extends Model { }

  Order.init({
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};