'use strict';

const Item = require('../models').Item;

class ItemController {
    static getItemsAll(req, res) {
        Item.findAll({})
        .then(items => {
            res.render('adminForm/tableItem', {
                items
            })
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static getItemsAdd(req, res) {
        res.render('items/itemAdd')
    }

    static postItemsAdd(req, res) {
        const itemName = req.body.itemName;
        const price = Number(req.body.price);
        const qty = Number(req.body.qty);

        Item.create({
            itemName,
            price,
            qty
        })
        .then(() => {
            res.redirect('/items/admin')
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
        .then((item) => {
            res.render('items/itemEdit', { item })
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

    static postItemsEdit(req, res) {
        const ItemId = req.params.id;
        let update = {};
        for (let key in req.body) {
            if (req.body[key].length > 0) {
                update[key] = req.body[key]
            }
        }
        Item.update(update, {
            where: {
                id: ItemId
            }
        })
        .then(() => {
            res.redirect('/items/admin')
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
            res.redirect('/items/admin')
        })
        .catch(err => {
            res.render('items/itemsError', {
                message: err.message
            })
        })
    }

}

module.exports = ItemController;