// Agregar clases con css

const h1 = document.querySelector('h1');

// Para agregar uyna clase en css se usa siempre el comando style

h1.style.color = 'red'

// Ahora como cambiariamos la fuente?
h1.style.fontFamily = 'Arial'

// Usar esta sintaxis está bien, pero lo más recomnedable es agregar los diferente estilos en css
// Y en javascript agregar o quitar clases según el momento
// Como se hace esto?¿

h1.classList.add('nueva-clase', 'otra-clases')

// Ahora para quitar se hace de la siguiente forma

const main = document.querySelector('main');

console.log(main)
main.classList.remove('contenido')

console.log(h1)