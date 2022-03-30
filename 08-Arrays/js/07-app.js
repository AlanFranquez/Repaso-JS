// Ahora veremos como modificiar un archivo de forma imperativa, la que usa push, unshift, etc
// esta forma modifica la variable actual


const carrito = [];

const producto1 = {
    nombre: 'Televisión',
    precio: 1200
}

carrito.push(producto1);

const producto2 = {
    nombre: 'Air Planes',
    precio: 1600
}

carrito.push(producto2);

const producto3 = {
    nombre: 'Celular',
    precio: 2000
}

carrito.push(producto3);

const producto4 = {
    nombre: 'Smart Watch',
    precio: 900
}

carrito.unshift(producto4);


// Ahora veremos los diferentes metodos para eliminar un producto de un arreglo

carrito.pop(); // Elimina el ultimo elemento del arreglo

carrito.shift(); // Elimina el primer elemento de un arreglo

carrito.splice(0,1); // es una propiedad que elimina un elemento asignado, en el primer parametro se asigna la posición y en el segundo la cantidad de veces que cortara.
//  En este caso cortara la primera posición, una sola vez.

console.table(carrito)