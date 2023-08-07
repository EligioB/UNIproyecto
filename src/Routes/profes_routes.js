const express = require('express')

const route = express.Router()

route.get('/obtenerProfes', (req,res) => {
    res.json({message:"Aqui estan los profes"})
})


module.exports = route;