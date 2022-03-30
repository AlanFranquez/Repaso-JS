// for of itera sobre arreglos. For in itera sobre objetos
// Dato a agregar: si se pone un for in en un arreglo nos devolvera la cantidad de indices.

const objeto = {
    auto: 'peugeot',
    year: 2019,
    disponible: true
}


for(let obj in objeto) {
    console.log(obj);

    console.log(`${objeto[obj]}`) // para tener los datos de la izquierda
}

console.log('===============')

// Esta sintaxis es un poco rara, ya no se utiliza mucho esto, es mejor utilizar lo siguiente



for(let [llave, resultado] of Object.entries(objeto)) {
    console.log(llave)
    console.log(resultado)
}