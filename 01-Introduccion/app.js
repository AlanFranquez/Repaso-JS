const variable = document.querySelector('h1');

variable.textContent = 'Cambio de nombre';

const prueba = document.querySelector('.hashtag');
const cartel = prompt('Cual es tu nombre?');

prueba.innerHTML = `${cartel} está aprendiendo Javascript`;

console.log('Hola Mundo');