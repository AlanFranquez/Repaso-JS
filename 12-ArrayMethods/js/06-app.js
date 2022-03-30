const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 800 },
]

// Otro metodo es el every
// Funciona un poco raro ya que solo da true si todas las condiciones se cumplen

const prueba = carrito.every((producto) => {
    return producto.precio > 500
});

console.log(prueba); // dara falso ya que no todos son mayores a 500


// El some espera que al menos una condicion se cumpla
const prueba2 = carrito.some((producto) => {
    return producto.precio > 500
});

console.log(prueba2); // dara true