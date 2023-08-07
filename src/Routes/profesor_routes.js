const express = require('express')
const controller = require('../Controllers/profe_controllers')

const route = express.Router()

// Aqui debo poner todo mi CRUD de Profes
route.get('/', (req, res) => {
    res.send('Hola desde la ruta de profes')
});

route.get('/obtenerProfes', controller.getProfes)

route.post('/agregarProfes', controller.addProfes)

route.delete('/borrarProfes/:id', controller.deleteProfes)

module.exports = route