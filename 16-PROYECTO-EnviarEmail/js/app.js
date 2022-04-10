// Variables
const enviarBTN = document.querySelector('#enviar');

// Variables de los campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const form = document.querySelector('#enviar-mail')


// EventListeners
EventListeners()

function EventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


    // Validación del formulario
    email.addEventListener('blur', validarFormEmail)
    asunto.addEventListener('blur', validarFormAsunto)
    mensaje.addEventListener('blur', validarFormMensaje)
}

function iniciarApp() {
    enviarBTN.disabled = true
}

function validarFormEmail(e) {
    if(e.target.value <= 0) {
        email.style.borderBottomColor = 'red'

        mostrarMensaje();
    }
}

function validarFormAsunto(e) {
    if(e.target.value <= 0) {
            asunto.style.borderBottomColor = 'red';

            mostrarMensaje();
        
        

        
    }
}

function validarFormMensaje(e) {
    if(e.target.value <= 0) {
        mensaje.style.borderBottomColor = 'red'

        mostrarMensaje();
    }
}


function mostrarMensaje() {
        const parrafo = document.createElement('p');

        parrafo.textContent = 'Debes rellenar los campos'
        parrafo.style.borderBottomColor = 'red';
        parrafo.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')

        // Se pone queryselectorAll ya que si no no funciona el .length
        const selector = document.querySelectorAll('.error');

        if(selector.length === 0) {
            form.appendChild(parrafo)

            setTimeout(() => {
                parrafo.remove();
            }, 3000);
        }
        
}