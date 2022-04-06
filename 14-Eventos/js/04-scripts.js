// Evento submit

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {

    e.preventDefault(); // Permite que el formulario no se envie
    

    console.log(e.target.action)
})