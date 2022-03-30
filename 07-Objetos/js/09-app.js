// Para solucionar estos problemas de los objetos se utiliza un Object Method que se llama Seal
// Para tener acceso a este metodo tenemos que usar el "use strict";

"use strict";

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,
    disponibilidad: true
}

// Existe una diferencia entre Seal y Freeze
// Seal te permite modificar los objetos ya existentes, pero no agregar ni eliminar nuevas propiedas.
// Freeze no te permite hacer nada

Object.seal(auto);

// auto.imagen = 'imagen.jpg';
// delete auto.year;

auto.nombre = 'Ford';
console.log(auto)

// Para comprobar si un objeto ha sido sellado
console.log(Object.isSealed(auto))