'use strict';

const Item = require('../models').Item;

class ItemController {
    static getItemsAll(req, res) {
        Item.findAll({})
        .then(items => {
            res.render('./adminForm/items', {
                itemData: items
            })
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static getItemsAdd(req, res) {
        res.render('itemAdd')
    }

    static postItemsAdd(req, res) {
        const itemName = req.body.itemName;
        const price = Number(req.body.price);
        const quantity = Number(req.body.quantity);

        Item.create({
            itemName,
            price,
            quantity
        })
        .then(() => {
                res.redirect('/items/add')
         })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static getItemsEdit(req, res) {
        const ItemId = req.params.id;

        Item.findByPk(ItemId)
        .then(item => {
            res.render('')
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static postItemEdit(req, res) {
        const ItemId = req.params.id;
        let update = {};

        for (let key in req.body) {
            if (req.body[key].length > 0) {
                update[key] = req.body[key]
            }
        }

        Item.update(update, {
            where: {
                id: Itemid
            }
        })
        .then(() => {
            res.redirect('/items')
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static getItemsDelete(req, res) {
        const ItemId = req.params.id;

        Item.destroy({
            where: {
                id: ItemId
            }
        })
        .then(() => {
            res.redirect('/items')
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

}

module.exports = ItemController;