// Funciones
import {eliminarCita, editarCita} from '../funciones.js'

import {contenedorCitas} from '../selectores.js'



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

export default UI;