const ejemplo = 'Buenas tardes';

console.log(ejemplo.replace('tardes', 'noches' )); // Para remplazar

console.log(ejemplo.slice(4, 7)) // Para cortar

console.log(ejemplo.substring(0, 5)) // para seleccionar


// Como hacen algunas paginas cuando quieren dejar la letra inicial del usuario en un circulito a un lado?

const nombre = 'Alan';
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));