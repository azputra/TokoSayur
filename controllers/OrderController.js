'use strict';

const Order = require('../models').Order;
const Item = require('../models').Item;
const User = require('../models').User;

class OrderController {
    static addItemToOrder(req, res) {
        const ItemId = req.body.itemId;
        const CustomerId = req.body.customerId;
        const quantity = req.body.quantity;
        const price = req.body.price;
        let totalPrice = quantity * price;

        Order.create({
            ItemId,
            CustomerId,
            quantity,
            totalPrice
        })
        .then(() => {
            res.render('/');
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateStatusOrder(req, res) {
        const CustomerId = req.body.CustomerId;
        Order.findAll({
            where: {
                CustomerId
            }
        })
        .then(orders => {
            res.render('')
        })
        .catch(err => {
            res.send(err.message)
        })
    }

    static getOrders(req, res) {
        User.findOne(
        {
            include: Item, where:{
                username: req.session.username
            }
        })
        .then(orders => {
            res.send(orders)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = OrderController;