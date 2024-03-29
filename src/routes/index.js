const express = require('express')
const routes = express.Router()
const ProductController = require('../app/controllers/ProductController')
const HomeController = require('../app/controllers/HomeController')

const products = require('./products')
const users = require('./users')

routes.get('/', HomeController.index)
routes.use('/products', products)
routes.use('/users', users)

// Alias
routes.get('/accounts', function(req, res) {
    return res.redirect('/users/login')
})


module.exports = routes
