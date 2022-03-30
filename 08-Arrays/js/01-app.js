// Los arrays se usan para guardar siempre un mismo tipo. Un arreglo puede tener multiples objetos que sean iguales
// Mientras que los objetos son variables

const arreglo = [1,2,3,4,5,6];

console.log(arreglo)

arreglo.forEach(arr => {
    console.log(arr)
});

// Otra forma de crear un arreglo
const arr = new Array(123, 122, 123)

console.log(arr)

// Pese a lo que los arrays generalmente se usan para guardar arreglos de un mismo tipo, tambien se pueden hacer arreglos
// con todo tipo de datos

const nuevo = ['Hola', 123, 5, true, {nombre: 'Alan', apellido: 'fránquez'}, [123]]; // tambien se pueden agregar objetos y arrays dentro de un array

console.log(nuevo)