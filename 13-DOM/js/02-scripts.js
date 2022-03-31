// Seleccionar 1 elemento por su clase

// Empecemos seleccionando el header

const header = document.getElementsByClassName('header');
console.log(header)

// Ahora seleccionar el div de hero
const div = document.getElementsByClassName('hero');
console.log(div)

// Seleccionar una clase que se repite en varias ocasiones
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);

// Que pasá si una clase no existe?
const no = document.getElementsByClassName('noexistoo');

console.log(no)