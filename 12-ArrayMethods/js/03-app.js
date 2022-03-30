const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 800 },
]


// Supongamos que queremos sumar todos los productos del carrito de compras

let total = 0;

carrito.forEach((producto) => {
    return total += producto.precio // Al total se le suma todo lo de los productos
})

console.log(total)

// Está es la sintaxis de reduce, es un poco complicada
// todo seria el argumento inciial y despues se le asigna el 0
//producto seria el segundo arguemtno y es lo que recorre el arreglo, al poner producto.precio accedemos a los precios
// usando el reduce no es necesario poner el += ya que el reduce lo hace automaticamente

const conReduce = carrito.reduce((todo, producto) => {
    return todo + producto.precio;
}, 0) // el 0 va despues de la llave

console.log(conReduce)