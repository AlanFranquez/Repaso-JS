const enviarBtn = document.querySelector('#enviar');
const reset = document.querySelector('#resetBtn');

// Campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const form = document.querySelector('#enviar-mail')

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        enviarBtn.disabled = true
        enviarBtn.classList.add('cursor-not-allowed')

        email.addEventListener('blur', validarForm)
        asunto.addEventListener('blur', validarForm)
        mensaje.addEventListener('blur', validarForm)

        form.addEventListener('submit', agradecimiento)



        // Resetear boton
        reset.addEventListener('click', borrar)


    })
}


function validarForm(e) {

    // Validación del mail 
    // console.log(e.target.type)
    // if(e.target.type === 'email') {
    //     const resultado = e.target.value.indexOf('@');

    //     if(resultado < 0) {

    //         mostrarMensaje('Fallo en el campo de mail, asegurese que todo este bien ordenado')
    //     }

    // }

    // Hay una forma mejor de hacer esto y es con expresiones regulares

    if(e.target.type === 'email') {
        
        if(er.test(e.target.value)) {
            const error = document.querySelector('.error');
            if(error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
    
            mostrarMensaje('email no valido');
        }

    }
    // console.log(e.target.value)

    if(e.target.value.length > 0) {

        const error = document.querySelector('.error');
        if(error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarMensaje('Hubo un error intentalo otra vez');
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        enviarBtn.disabled = false;
        enviarBtn.classList.remove('cursor-not-allowed')
        enviarBtn.style.backgroundColor = 'Blue'
    }


    
}

function mostrarMensaje(mensaje) {
    const p = document.createElement('P');

    p.textContent = mensaje;
    p.classList.add('text-center', 'border', 'mt-5', 'border-red-500', 'background-color-100', 'p-3', 'text-red-500', 'error') 
    // Agregamos una clase extra para que luego podamos evitar que el mensaje se repita

    const rep = document.querySelectorAll('.error'); // querySelectorAll para poder usar .length
    
    // Para que no se vuelva a repetir el mensaje
    if(rep.length === 0) {
        form.appendChild(p)

        setTimeout(() => {
            p.remove()
        }, 3000);
    }

    
}

function agradecimiento(e) {
    e.preventDefault();
    
    mensajeAgradecido('Felicidades tu email ha sido enviado');
}

function borrar(e) {
    e.preventDefault();

    email.value= ''
    asunto.value= ''
    mensaje.value= ''
}

function mensajeAgradecido(m) {
    const p = document.createElement('p');
    p.classList.add('text-center', 'border', 'mt-5', 'border-green-500', 'background-color-green', 'p-3', 'text-green-500', 'aaa')
    p.textContent = m;

    const noRepeat = document.querySelectorAll('.aaa');

    if(noRepeat.length === 0) {
        form.appendChild(p);

        email.value= ''
        asunto.value= ''
        mensaje.value= ''
        
        
        setTimeout(() => {
            p.remove()
        }, 3000);
        
    }

    
}