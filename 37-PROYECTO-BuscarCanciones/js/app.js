// Selectores
import {resultado, form, divBuscar, divMensajes, divResultado, headingResultado} from './interfaz.js'

form.addEventListener('submit', enviarDatos);

function enviarDatos(e) {
    e.preventDefault();

    // Validar
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        imprimirAlerta('Todos los campos deben estar llenos', 'error')

        return;
    }

    const busqueda = new(artista, cancion)
    
};

function imprimirAlerta(mensaje, tipo) {

    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const div = document.createElement('div');
        div.classList.add('rounded', 'max-w-lg', 'mx-auto','px-4', 'py-3', 'mt-5', 'border', 'text-center', 'norepetir');
        div.textContent = mensaje;
    
        if(tipo === 'error') {
            div.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            div.classList.add('bg-green-100', 'border-green-400', 'text-center');
        }
    
        form.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 2000);
    }
   
};
