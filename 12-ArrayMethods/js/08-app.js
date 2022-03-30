// El spread operator no modifica el arreglo original sino que crea uno nuevo
// Esto esta basado en la programación funcional, que trata de no modificar la parte original sino que escribirla en una nueva

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 800 },
]

// Supongamos que quiero agregar un nuevo mes usando el Spread Operator 

const resultado = [...meses, 'Agosto']; // No se ponen los ... en agosot ya que es un String sino se pondría mal, ej: [A,G,O,S,T,O]

console.log(resultado)


// Como agregar una propiedad a un objeto con spread Operator, lo haremos con el arreglo de carrito

const producto = {nombre: 'Micrfono logitech', precio: 900};

const agregado = [...carrito, producto]; // ... no se le pone eso a un objeto, sino da error
console.log(agregado)