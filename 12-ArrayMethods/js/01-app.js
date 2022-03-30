const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Comprobar si un mes existe usando el ForEach

meses.forEach((mes) => {
    if(mes === 'Enero') {
        console.log('Enero si existe!')
    }
})

// Tambien se puede comprobar lo mismo de una manera más sencilla, con includes
// Este metodo solo sirve para arreglos normales como el primero

const resultado = meses.includes('Enero');
console.log(resultado) // true

// Otro metodo más efectivo que sirve para cualquier tipo de arreglo es el .some, este es más eficiente que el includes
// Ya que se puede usar en arreglos normales y en arreglos con objetos
// Se debe colocar un return cuando se usa el some

const comprobar = meses.some((mes) => {
    return mes === 'Enero';
})

console.log(comprobar);

// hagamos lo mismo pero con el otro arreglo

const comprobar2 = carrito.some((producto) => {
    return producto.nombre === 'Televisión'; // true
})

console.log(comprobar2)

const comprobar3 = carrito.some((producto) => {
    return producto.nombre === 'Alan'; // false
})

console.log(comprobar3)

// Ejercicio. Me gustaría saber si existe algun producto que vale 400

const ejercicio = carrito.some((producto) => {
    return producto.precio === 400;
})

console.log(ejercicio)

// Ahora saber si existe un producto que valga 300

const ejercicio2 = carrito.some((producto) => {
    return producto.precio === 300;
})

console.log(ejercicio2); // si existe un producto con ese precio