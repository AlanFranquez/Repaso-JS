// En weakmap no se puede iterar, ni usar .size
// y solo almacenan objetoss

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor'); // se le asigna valor con la idproducto 10

// Para comprobar si existen
console.log(weakmap.has(producto));

// Para obtenerlos
console.log(weakmap.get(producto));

// Para eliminar objetos
// console.log(weakmap.delete(producto));ç



console.log(weakmap)