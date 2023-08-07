const profesJson = require('../Models/profes.json')
const fs = require('fs')

const getProfes = (req, res) => {
    res.json(profesJson)
}

const addProfes = (req, res) => {
    // desestructuración
    let profe = {name, email, materias}

    console.log(profe);

    profesJson.profes.push(profe)
    res.json(profesJson)
}


function deleteProfes(req, res) {
    const id = req.params.id
    console.log(id);

    let profesFilter = profesJson.profes.filter(profe => profe.id !== id)
    
    // Convertir el objeto JSON modificado a una cadena JSON
  const nuevoContenidoJson = JSON.stringify(profesFilter, null, 2);

  // Escribir el objeto JSON modificado nuevamente en el archivo
//   fs.writeFile(alumnosJson, alumnosFilter, 'utf8', (error) => {
//     if (error) {
//       console.error('Error al escribir en el archivo:', error);
//       return;
//     }
//     console.log('Archivo JSON modificado exitosamente.');
//   });

    if (profesFilter.length >= 0) {
        return res.json({ status: true, profesFilter: profesFilter })
    } else  {
       return res.json({ status: false })
    }
}

module.exports = {getProfes, addProfes, deleteProfes}