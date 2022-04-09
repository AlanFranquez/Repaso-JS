// Variables
const enviarBTN = document.querySelector('#enviar');


// EventListeners
EventListeners()

function EventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp)
}

function iniciarApp() {
    enviarBTN.disabled = true
}