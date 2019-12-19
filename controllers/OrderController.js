'use strict';

const Order = require('../models').Order;
const Item = require('../models').Item;
const User = require('../models').User;
const numberToRp = require('../helpers/numberToRp')

class OrderController {
    static addItemToOrder(req, res) {
        let ItemId = req.params.id
        let UserId = req.session.userId;
        let price = req.body.price;
        let totalPrice = price;
        // console.log(UserId, ItemId, price, totalPrice)
        Order.create({
            UserId,
            ItemId,
            quantity: 1,
            totalPrice
        })
            .then(() => {
                res.redirect('/users/login');
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateStatusOrder(req, res) {
        Order.update({
            status: "completed"
        }, {
            where: {
                UserId: req.body.UserId
            }
        })
            .then((order) => {
                res.redirect('/users/login')
            }).catch((err) => {
                res.send(err)
            });
    }

    static getOrders(req, res) {
        User.findOne(
            {
                include: Item, where: {
                    username: req.session.username
                }
            })
            .then(orders => {
                // res.send(orders)
                res.render('orders/carts', { orders, username: req.session.username, numberToRp })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = OrderController;