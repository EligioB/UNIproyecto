const express = require('express')
const controller = require('../Controllers/alumno_controller')

const route = express.Router()

// Aqui debo poner todo mi CRUD de ALumnos
route.get('/', (req, res) => {
    res.send('Hola desde la ruta de alumnos')
});

route.get('/obtenerAlumnos', controller.getAlumnos)

route.post('/agregarAlumno', controller.addAlumno)

route.patch('/actualizarAlumno', controller.updateAlumno)

route.delete('/borrarAlumno/:id', controller.deleteAlumno)

module.exports = route