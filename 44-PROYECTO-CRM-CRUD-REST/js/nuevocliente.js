import { imprimirMensaje } from "./funciones.js";
import {nuevoCliente} from "../js/API.js";

(function() {
    const form = document.querySelector('#formulario');

    console.log('hi')

    form.addEventListener('submit', validacionCliente);


    function validacionCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const empresa = document.querySelector('#empresa').value
        const telefono = document.querySelector('#telefono').value

        const cliente = {
            nombre: nombre,
            email: email,
            empresa: empresa,
            telefono:telefono
        }

        

        if(nombre === '' || email === ''|| empresa === '' || telefono === '' ) {
            imprimirMensaje('Todos los campos son obligatorios');

            return;
        }

        nuevoCliente(cliente)


    }
})();

console.log('hi')