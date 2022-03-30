const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Supongamos que quiero saber en que indice se encuentra abril utilizando forEach
// Como lo haría?

meses.forEach((mes, indice) => {
    if(mes === 'Abril') {
        console.log(indice)
    }
})

// Esto se puede hacer más sencillo con un findIndex
// Al igual que el .some tambien se utiliza un return

const encontrarIndice = meses.findIndex((mes) => {
    return mes === 'Abril';
})

console.log(encontrarIndice) // 3

// Podemos hacer lo mismo pero con un array con objetos

const encontrarIndice2 = carrito.findIndex((producto) => {
    return producto.nombre === 'Televisión';
})

console.log(encontrarIndice2)