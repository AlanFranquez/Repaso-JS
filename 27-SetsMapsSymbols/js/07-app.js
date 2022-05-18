// Generadores en javascript
// yield nos permite retornar el valor
function *crearGenerador() /* el * indica que es un generador*/ {
    yield 1+1
    yield 'Alan'
    yield true
    yield 'Milanesa napolitana'
}


const iterador = crearGenerador();

console.log(iterador)
console.log(iterador.next()) // value es el valor, y done indica si está activado o no
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next()) // cuando indica true es porque ya está acabado



// otra prueba ahora con un carrito de compras

function *otroGenerador(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }   
}

const carrito = ['Televisión', 'Acolchado', 'tele']

const productos = otroGenerador(carrito);

console.log(productos)
console.log(productos.next()) // va iterando con el next
console.log(productos.next())
console.log(productos.next())
console.log(productos.next())