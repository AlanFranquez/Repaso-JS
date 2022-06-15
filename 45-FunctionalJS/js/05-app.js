const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// reducir la cantidad de codigo en las funciones
// por ejemplo quitar los parentesis en los arrow cuando es un solo argumento
// usar nombre de argumentos cortos
// y aprovechar el return por implicito
const soloNombres = p => p.nombre;

const recorrerSoloNombres = carrito.map(soloNombres)
console.log(recorrerSoloNombres)

const mayoresA500 = p => p.precio > 500;

const recorrerMayoresA500 = carrito.filter(mayoresA500)
console.log(recorrerMayoresA500)