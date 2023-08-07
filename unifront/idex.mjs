let alumns = [];
let profes = [];

function fetchMaterias () {
    fetch('http://localhost:3000/getMaterias')
    .then(response => response.json())
    .then(data => {

         let option = data.materias.map(item => `<option value="${item.materia}">${item.materia}</option>`)

        document.getElementById("selecter-materias")
        .innerHTML = option
    })
}

function fetchProfes () {
    fetch('http://localhost:3000/obtenerProfes')
    .then(response => response.json())
    .then(data => {

         let option = data.profes.map(item => `<option value="${item.profes}">${item.profes}</option>`)

        document.getElementById("selecter-materias")
        .innerHTML = option
    })
}


fetchProfes()

fetch('http://localhost:3000/obtenerProfes')
.then(response => response.json())
.then(data => {
    profes = data.profes;
    console.log(profes);
    showProfes(profes)
})
.catch(error => console.log(error));

fetchMaterias()

fetch('http://localhost:3000/obtenerAlumnos')
.then(response => response.json())
.then(data => {
    alumns = data.alumnos;
    console.log(alumns);
    showAlumnos(alumns)
})
.catch(error => console.log(error));



function showAlumnos(array) {
    const table = document.getElementById("listStudents");
    let tableContent

    array.forEach((item, index) => {
        tableContent  +=  ` <tr>
            <th scope="row" class="table-background">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.boleta}</td>
            <td><button type="button" class="btn btn-warning" onclick="eliminarAlumno('${item.id}')">Eliminar</button></td>
            <td><button type="button" class="btn btn-info" onclick="showStudent('${item.id}')">Ver detalle</button></td>

        </tr>`;
        
        }
    );
    table.innerHTML = tableContent;

}

function showProfes(array) {
    const table = document.getElementById("listProfes");
    let tableContent

    array.forEach((item, index) => {
        tableContent  +=  ` <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.materias}</td>
            <td><button type="button" class="btn btn-warning" onclick="eliminarProfes('${item.id}')">Eliminar</button></td>
            <td><button type="button" class="btn btn-info" onclick="showStudent('${item.id}')">Ver detalle</button></td>

        </tr>`;
        
        }
    );
    table.innerHTML = tableContent;

}

function eliminarProfes(id){

    fetch(`http://localhost:3000/borrarProfes/${id}`, {
        method: 'DELETE'
    }).then(response => response.json())
    .then(data => {
        if (data.status) {
            document.getElementById('listProfes').innerHTML = ''
            showProfes(data.profesFilter)
            alert("Profesor eliminado")
        } else {
            alert("Profesor no eliminado")    
        }
    })
    .catch(error => console.log(error));

}

function eliminarAlumno(id){

    fetch(`http://localhost:3000/borrarAlumno/${id}`, {
        method: 'DELETE'
    }).then(response => response.json())
    .then(data => {
        if (data.status) {
            document.getElementById('listStudents').innerHTML = ''
            showAlumnos(data.alumnosFilter)
            alert("Alumno eliminado")
        } else {
            alert("Alumno no eliminado")    
        }
    })
    .catch(error => console.log(error));

}