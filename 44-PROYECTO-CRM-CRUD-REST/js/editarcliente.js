import { editarCliente, obtenerCliente} from "./API.js";
import { imprimirMensaje } from "./funciones.js";
(function() {


    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async() => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parametrosURL.get('id');
        console.log(idCliente)
        // console.log('prueba')
        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente)

        // Submit al formulario
        const form = document.querySelector('form');

        form.addEventListener('submit', validar)
    });


    function mostrarCliente(cliente) {
        const {nombre, empresa, email, telefono, _id} = cliente
        console.log(cliente)
        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;
        idInput.value = _id
    };

    function validar(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const empresa = document.querySelector('#empresa').value
        const telefono = document.querySelector('#telefono').value

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: idInput.value
        }

        console.log(cliente.id)

        

        if(nombre === '' || email === ''|| empresa === '' || telefono === '' ) {
            imprimirMensaje('Todos los campos son obligatorios');

            return;
        }

        editarCliente(cliente)
    }
})()