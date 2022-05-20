import Citas from './Clases/Citas.js'
import UI from './Clases/UI.js'

// Selectores
import {mascotaInput, telefonoInput, propietarioInput, fechaInput, horaInput, sintomasInput,form} from './selectores.js'


const administrarCitas = new Citas();
const ui = new UI();

let editando;

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
export function datosCita(e) {
    // Para saber lo que se está escribiendo
    // console.log(e.target.value)

    // Para que esto funcione se necesita que el name de la etiqueta html sea la misma que de la propiedad del obj
    citaOBJ[e.target.name] = e.target.value

    // console.log(citaOBJ)
}

export function nuevaCita(e) {
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

export function resetearOBJ() {
    citaOBJ.mascota = '';
    citaOBJ.propietario = ''
    citaOBJ.telefono = ''
    citaOBJ.fecha = ''
    citaOBJ.hora = ''
    citaOBJ.sintomas = ''
}

export function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id)

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se ha elminado correctamente', 'exito')

    // Mostrar en el html
    ui.mostrarCitas(administrarCitas)
}

// FUNCION PARA EDITAR LA CITA
export function editarCita(cita) {
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