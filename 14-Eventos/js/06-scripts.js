// Event Bubbling 
// Es un problema que por ejemplo cuando queremos llamar a un evento se termina llamando el evento padre
// para detenerlo es sencillo acá un ejemplo

const card = document.querySelector('.card');
const infoA = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


card.addEventListener('click', (e) => {
    e.stopPropagation(); // Esto evita el event bubbling

    console.log('Desde el card')
});

infoA.addEventListener('click', (e) => {
    e.stopPropagation();


    console.log('Dandole al info')
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();

    console.log('dandole al titulo')
}) 