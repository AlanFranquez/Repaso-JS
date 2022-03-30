// .find hace un nuevo arreglo en base a lo que uno busque
// solo retorna el primer valor que cumpla la condición, no es como filter que retorna todos


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 800 },
]

// Primeros hagamos el ejemplo con forEach
// recordar que el segundo argumento en el forEach da el indice (posición)

let resultado;
carrito.forEach((producto, indice) => {
    if(producto.nombre === 'Audifonos') {
        resultado = carrito[indice]
    }
})

console.log(resultado)

// Quiero probar algo con el forEach

let otroResultado;
carrito.forEach((producto, i) => {
    if(producto.precio === 200) {
        otroResultado = carrito[i]
    }
});

console.log(otroResultado)

// Ahora hagamos lo mismo con el .find

const resultado2 = carrito.find((producto) => {
    return producto.nombre === 'Audifonos';
})

console.log(resultado2)

//Hagamos un find con el precio ahora

const resultado3 = carrito.find((producto) => {
    return producto.precio === 400; // teclado
})

console.log(resultado3)