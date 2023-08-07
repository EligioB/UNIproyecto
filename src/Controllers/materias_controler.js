const getMaterias = (req, res) => {
  
    res.json({materias: [
        {
            id: 1,
            materia: 'Matematicas',
            profesor: 'Juan Perez',
        },
        {
            id: 2,
            materia: 'Fisica',
            profesor: 'Maria Lopez',
        },
        {
            id: 3,
            materia: 'Quimica',
            profesor: 'Pedro Martinez',
        },
        {
            id: 4,
            materia: 'Historia',
            profesor: 'Jose Gonzalez',
        },
        {
            id: 5,
            materia: 'Programacion Backed',
            profesor: 'joe Gonzalez',
        }
    ]})
}

module.exports = {getMaterias}