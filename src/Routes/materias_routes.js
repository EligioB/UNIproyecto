const express = require('express')  
const materias = require('../Controllers/materias_controler')

const route = express.Router()

route.get('/getMAterias', materias.getMaterias)

module.exports = route