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

// High order Function, Programacion funcional
// una funcion que usa una funcion como argumento

// Metodo normal de hacer un filter
const recorrerMayoresA300 = carrito.filter((producto) => {
    return  producto.precio > 300;
})

console.log(recorrerMayoresA300)

// Pero en programacion funcioanl se hace con High order function

const mayoresA500 = (producto) => {
    return producto.precio > 500;
}

const recorrerMayoresA500 = carrito.filter(mayoresA500)
console.log(recorrerMayoresA500)