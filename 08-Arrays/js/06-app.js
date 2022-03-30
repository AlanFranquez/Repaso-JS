// La forma declarativa es esta. con el spread Operator
// No modifica la variable original, crea una nueva para hacerlo

let carrito = [];

const producto1 = {
    nombre: 'Televisión',
    precio: 1200
}

const agregar1 = [...carrito, producto1];
console.log(agregar1);

const producto2 = {
    nombre: 'Air Planes',
    precio: 1600
}

const agregar2 = [...carrito, producto2];
console.log(agregar2);


const producto3 = {
    nombre: 'Celular',
    precio: 2000
}

const agregar3 = [...carrito, producto3];
console.log(agregar3);


const agregarTodo = [...carrito, producto1, producto2, producto3];
console.log(agregarTodo)

let resultado;

resultado = [...carrito, producto1];

resultado = [...resultado, producto2, producto3] // Se puede reutilizar la variable de resultado y pondra lo ultimo que se agrego


console.table(resultado)