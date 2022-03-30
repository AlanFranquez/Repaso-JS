// Para solucionar estos problemas de los objetos se utiliza un Object Method que se llama Freeze
// Para tener acceso a este metodo tenemos que usar el "use strict";

"use strict";

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,
    disponibilidad: true
}

Object.freeze(auto); // congela el objeto permitiendo que no pueda ser modificado, y actue como una constante.

// delete auto.year;
// auto.disponibilidad = false;
// console.log(auto)

// Como saber si un objeto está congelado.
console.log(Object.isFrozen(auto)); // true