const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')

router
    .get('/', (req, res) => res.render("template"))
    .get('/master-data/products', ProductController.index)
    .get('/master-data/products/create', ProductController.create)
    .post('/master-data/products', ProductController.store) 
    .get('/master-data/products/:id', ProductController.show)
    .get('/master-data/products/:id/edit', ProductController.edit)
    .post('/master-data/products/:id', ProductController.update )
    .get('/master-data/products/:id/delete', ProductController.delete)

router
    .get('/master-data/user', UserController.index)
    .get('/master-data/user/create', UserController.create)
    .post('/master-data/user', UserController.store)
    .get('/master-data/user/:id', UserController.show)
    .get('/master-data/user/:id/edit', UserController.edit)
    .post('/master-data/user/:id', UserController.update)
    .get('/master-data/user/:id/delete', UserController.delete)

module.exports = router