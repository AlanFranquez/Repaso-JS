const tweet = document.querySelector('#tweet');
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista-tweets');



let tweets = []

// AddEventListeners
document.addEventListener('DOMContentLoaded', () => {
    
    form.addEventListener('submit', envioForm)
    // tweet.addEventListener('input', leerTweet)
    lista.addEventListener('click', borrarTuit)

})

function envioForm(e) {
    e.preventDefault();

    if(tweet.value === '') {
        mostrarAlerta('El tuit no puede ir vació');

        return
    } 

    // tweets = [...tweets, tweet.value]

    const twOBJ = {
        id: Date.now(),
        tweet: tweet.value
    }

    tweets = [...tweets, twOBJ]
    console.log(tweets)

    crearHTML();

    tweet.value = ''


}

function mostrarAlerta(mensaje) {
    const div = document.createElement('div');
    div.textContent = mensaje;
    div.classList.add('alert', 'error', 'aaaa');

    const clase = document.querySelectorAll('.aaaa');
    if(clase.length === 0) {
        form.appendChild(div)
    } 

    setTimeout(() => {
        div.remove()
    }, 3000);


}

function crearHTML() {

    limpiarHTML();

    tweets.forEach((tw) => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${tw.tweet} <a class="borrar-tweet" href="#" data-id="${tw.id}">X</a>
        `;

        
        lista.appendChild(li)
    })
        
}

function limpiarHTML() {
    lista.innerHTML = ''
}

