const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 800 },
]

// El filter es un metodo de arrays que filtra según lo que pidamos
// Al igual que los otros metodos se utiliza el return

// Filter crea un arreglo con todo lo que hayas solicitado filtrar, acá algunos ejemplos


const respuesta1 = carrito.filter((producto) => {
    return producto.precio > 200;
});

const respuesta2 = carrito.filter((producto) => {
    return producto.nombre === 'Televisión'
});

// console.log(respuesta1)
// console.log(respuesta2)


// Ejercicio, filtrar los productosd mayores o igual a 300
// filtrar todos los producos menos el de la tablet
// filtrar los productos menores a 800

const ejercicio = carrito.filter((producto) => {
    return producto.precio >= 300;
});

console.log(ejercicio)

const ejercicio2 = carrito.filter((producto) => {
    return producto.nombre !== 'Tablet';
})

console.log(ejercicio2);

const ejercicio3 = carrito.filter((producto) => {
    return producto.precio < 800;
});

console.log(ejercicio3)