// Variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');

// EventListeners
eventListeners()
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    // form.addEventListener('submit', prueba)
}

// OTRA FORMA DE METER LOS DATOS EN UN ARREGLO
// function prueba(e) {

//     e.preventDefault()
//     const mascotaInput = document.querySelector('#mascota').value;
//     const propietarioInput = document.querySelector('#propietario').value;
//     const telefonoInput = document.querySelector('#telefono').value;
//     const fechaInput = document.querySelector('#fecha').value;
//     const horaInput = document.querySelector('#hora').value;
//     const sintomasInput = document.querySelector('#sintomas').value;

//     let arr = []

//     const OBJ = {
//         mascota: mascotaInput,
//         propietario: propietarioInput,
//         telefono: telefonoInput,
//         fecha: fechaInput,
//         hora: horaInput,
//         sintomas: sintomasInput
//     }

//     arr = [...arr, OBJ]

//     console.log(arr)
// }


// Funciones

// Metodo para agregar información al objeto
const citaOBJ = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}


function datosCita(e) {
    // Para saber lo que se está escribiendo
    // console.log(e.target.value)

    // Para que esto funcione se necesita que el name de la etiqueta html sea la misma que de la propiedad del obj
    citaOBJ[e.target.name] = e.target.value

    console.log(citaOBJ)
}