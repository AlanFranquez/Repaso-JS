const enviarBtn = document.querySelector('#enviar');
const reset = document.querySelector('#resetBtn');

// Campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        email.addEventListener('blur', validarForm)



        // Resetear boton
        reset.addEventListener('click', borrar)


    })
}


function validarForm(e) {
    // console.log(e.target.value)

    if(e.target.value <= 0) {
        email.style.border = 'red'
    }
}

function borrar(e) {
    e.preventDefault();

    email.value= ''
    asunto.value= ''
    mensaje.value= ''
}