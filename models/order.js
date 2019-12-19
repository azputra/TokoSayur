'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Order extends Model { }

  Order.init({
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (order) => {
         order.status = 'process'
      }
    },
    sequelize
  });
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};