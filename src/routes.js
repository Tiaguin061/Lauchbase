const express = require('express')
const routes = express.Router()
const multer = require('./app/midlewares/multer')
const ProductController = require('./app/controllers/ProductController')

routes.get('/', function (req, res) {
    return res.render('layout.njk')
})

routes.get('/products/create', ProductController.create)
routes.get('/ads/create', ProductController.create)
routes.get('/products/:id/edit', ProductController.edit)

routes.post('/products', multer.array("photos", 6), ProductController.post)
routes.put('/products', multer.array("photos", 6), ProductController.put)
routes.delete('/products', ProductController.delete)

module.exports = routes
