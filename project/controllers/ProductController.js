const Product = require('../models/Product')

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, items) => {
            res.render("products/index", { items })
        })
    },
    create: (req, res) => res.render("products/create"),

    store: (req, res) => {
        let product = new Product({
            nama: req.body.nama,
            harga: req.body.harga,
            stok: req.body.stok
        })
            .save((err, item) => {
                if (err) res.send("Error Menyimpan Data")
                res.redirect("/master-data/products")

            })
    },

    show: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, item) => {
            if (err) res.render("errors/404")
            res.render("products/show", { item })
        })
    },

    edit: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, item) => {
            if (err) res.render("errors/404")
            res.render("products/edit", { item })
        })
    },

    update: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, product) => {
            if (err) res.render("errors/404")
            product.nama = req.body.nama
            product.harga = req.body.harga
            product.stok = req.body.stok
            product.save((err, item) => {
                if (err) res.send("Error menyimpan data")
                res.redirect("/master-data/products")
            })
        })
    },

    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id }, (err, product) => {
            if (err) res.render("errors/404")
            res.redirect("/master-data/products");
        })
    }
}