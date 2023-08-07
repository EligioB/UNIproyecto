const alumnosJson = require('../Models/alumnos.json')
const fs = require('fs')

const getAlumnos = (req, res) => {
    res.json(alumnosJson)
}

const addAlumno = (req, res) => {
    // desestructuración
    let materias = []

    let {boleta, name,  email, materia, calificacion, profesor, horario} = req.body 

    let materiaObj = {materia,calificacion,profesor,horario}
    materias.push(materiaObj)
    boleta = parseInt(boleta)
    let alumno = {name, boleta, email, materias}

    console.log(alumno);

    alumnosJson.alumnos.push(alumno)
    res.json(alumnosJson)
}

const updateAlumno =  (req, res) => {

    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos[index] = req.body
        return res.json(alumnosJson)
    } else  {
       return res.json({message:"No existe el alumno"})
    }
}

function deleteAlumno(req, res) {
    const id = req.params.id
    console.log(id);

    let alumnosFilter = alumnosJson.alumnos.filter(alumno => alumno.id !== id)
    
    // Convertir el objeto JSON modificado a una cadena JSON
  const nuevoContenidoJson = JSON.stringify(alumnosFilter, null, 2);

  // Escribir el objeto JSON modificado nuevamente en el archivo
//   fs.writeFile(alumnosJson, alumnosFilter, 'utf8', (error) => {
//     if (error) {
//       console.error('Error al escribir en el archivo:', error);
//       return;
//     }
//     console.log('Archivo JSON modificado exitosamente.');
//   });

    if (alumnosFilter.length >= 0) {
        return res.json({ status: true, alumnosFilter: alumnosFilter })
    } else  {
       return res.json({ status: false })
    }
}

module.exports = {getAlumnos, addAlumno, deleteAlumno, updateAlumno}