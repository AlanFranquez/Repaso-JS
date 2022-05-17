// Variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

// Definir y asignar clases

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];

        // console.log(this.citas)
    }
    
    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => {
            return cita.id !== id
        })
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map((cita) => {
            return  cita.id === citaActualizada.id ? citaActualizada : cita
        })
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const div = document.createElement('DIV');
        div.textContent = mensaje;
        div.classList.add('alert', 'text-center', 'norepetir', 'col-12', 'd-block')

        if(tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success')
        }

        const contenido = document.querySelector('#contenido');
        const norepetir = document.querySelectorAll('.norepetir');

        if(norepetir.length === 0) {
            contenido.insertBefore(div, document.querySelector('.agregar-cita'))

            setTimeout(() => {
                div.remove()
            }, 2000);
        }

    }

    mostrarCitas({citas}) {
        // Destructuring en el argumento, seria como escribir const {citas} = citas; para extraer el valor
        // console.log(citas)

        this.limpiarHTML()

        citas.forEach((cita) => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            

            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            // Agregarle un atributo
            divCita.dataset.id = id

            // Escribir codigo para mostrar los elementos
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.textContent = mascota;
            mascotaParrafo.classList.add('font-weight-bolder', 'card-title');


            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;
            
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono:</span> ${telefono}
            `;

            const fechaparrafo = document.createElement('p');
            fechaparrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;

            const horraParrafo = document.createElement('p');
            horraParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora:</span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
            `;

            // Boton de eliminar con su función
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'my-2', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> `;

            // AGREGAR LA FUNCIöN PARA ELIMINAR LA CITA
            btnEliminar.onclick = () => eliminarCita(id);

            // Boton de editar con su funcion
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info', 'my-2');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>`

            // AGREGAR LA FUNCION PARA EDITAR CITA
            btnEditar.onclick = () => editarCita(cita)
            
                    



            // Agregar elementos html
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaparrafo)
            divCita.appendChild(horraParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita)
            
         })


    }


    limpiarHTML() {
        contenedorCitas.innerHTML = ''
    }
}

const administrarCitas = new Citas();
const ui = new UI();

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


    form.addEventListener('submit', nuevaCita)
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

//     const {mascota, propietario, telefono, fecha, hora, sintomas} = OBJ
//     if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
//             console.log('Todos los campos son obligatorios');

//             return;
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

//Agregar datos al citaOBJ
function datosCita(e) {
    // Para saber lo que se está escribiendo
    // console.log(e.target.value)

    // Para que esto funcione se necesita que el name de la etiqueta html sea la misma que de la propiedad del obj
    citaOBJ[e.target.name] = e.target.value

    // console.log(citaOBJ)
}

function nuevaCita(e) {
    e.preventDefault();

    // Extraemos las propiedades de citaobj para validar
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaOBJ;

    // Validacion, comprobar si los campos estan vacios
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    // Si enviamos datos con el modo editando activado, se enviará esto. Sino lo que dice en else
    if(editando) {
        ui.imprimirAlerta('Se ha editado la cita con exito', 'exito');

        // Actualizar el objeto
        administrarCitas.editarCita({...citaOBJ}) // Le pasamos una copia del objeto

        // Cuando se envie el boton submnit volverá a decir crear cita
        const btnSUBMIT = document.querySelector('button[type="submit"]')
        btnSUBMIT.textContent = 'CREAR CITA'

        // Quitar el modo edición
        editando = false;

    } else  {
        // Generar un id unico para el objeto, lo asignamos acá
        citaOBJ.id = Date.now();

        // Agregar cita a la clase, lo de {...citaobj} es para que no sé replique el codigo, sino que toma una copia y añade la sigueinte
        administrarCitas.agregarCita({...citaOBJ});

        // Agregar mensaje de exito
        ui.imprimirAlerta('Se agregó la cita correctamente', 'exito');
    }
 
    

    // Resetear el objeto cuando se escribe uno nuevo para que la validación funcione
    resetearOBJ()

    // Resetear el form 
    form.reset()

    // Mostrar citas en el html
    ui.mostrarCitas(administrarCitas); // le agregamos el administrarcitas ya que ahí se encuentran las citas


}

function resetearOBJ() {
    citaOBJ.mascota = '';
    citaOBJ.propietario = ''
    citaOBJ.telefono = ''
    citaOBJ.fecha = ''
    citaOBJ.hora = ''
    citaOBJ.sintomas = ''
}

function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id)

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se ha elminado correctamente', 'exito')

    // Mostrar en el html
    ui.mostrarCitas(administrarCitas)
}

// FUNCION PARA EDITAR LA CITA
function editarCita(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Agregar datos a los inputs para editar
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Agregar datos al objeto
    citaOBJ.mascota = mascota;
    citaOBJ.propietario = propietario;
    citaOBJ.telefono = telefono;
    citaOBJ.fecha = fecha;
    citaOBJ.hora = hora;
    citaOBJ.sintomas = sintomas;
    citaOBJ.id = id;

    // Editar el boton cuando se este editando
    const btnSUBMIT = document.querySelector('button[type="submit"]')
    btnSUBMIT.textContent = 'Guardar Cambios';

    // Cambiamos el modo, actualmente estamos en modo edición
    editando = true
} 