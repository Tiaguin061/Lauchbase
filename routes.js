const express = require('express')
const routes = express.Router() // criando a rota dos metodos get
const instructors = require("./instructors")
const members = require('./members')

routes.get('/', function (req, res) {
    return res.redirect('/instructors')
})

routes.get('/instructors', instructors.index)

routes.get('/instructors/create', instructors.create)

// ve o id
routes.get('/instructors/:id', instructors.show)

// para ir na page de editar
routes.get('/instructors/:id/edit', instructors.edit)

// para editar
routes.put('/instructors', instructors.put)

routes.delete('/instructors', instructors.delete)

routes.post('/instructors', instructors.post) 


routes.get('/members', members.index)

routes.get('/members/create', members.create)

routes.get('/members/:id/', members.show)

routes.get('/members/:id/edit', members.edit)

routes.put('/members', members.put)

routes.delete('/members', members.delete)

routes.post('/members', members.post)

module.exports = routes


// get: Receber RESOURCE
// Post: Criar um novo RESOURCER com dados enviados
// put: Atualizar RESOURCE
// delete: Deletar RESOURCE