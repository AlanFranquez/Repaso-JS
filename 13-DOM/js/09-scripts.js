// Como eliminar elementos del DOM con javascript
// Es muy sencillo, hay dos formas
// Una es desde el elemento mismo
// Y la otra es desde el padre

// Desde el elemento mismo
const primerLink = document.querySelector('a');
console.log(primerLink)
primerLink.remove();

// Ahora eliminarlo desde el padre
// Supongamos que quiero eliminar registro
const nav = document.querySelector('nav');
console.log(nav.children[1])
nav.removeChild(nav.children[1])