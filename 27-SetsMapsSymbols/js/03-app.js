// MAP, otra manera de crear objetos que tiene un mejor performancr que un objeto por si mismo
// Es muy similar a un set
// Tiene llave y valor, similar a un objeto

const nuevoMAP = new Map();

// Para asignarle valores, se usa .set
nuevoMAP.set('nombre', 'JUAN')
nuevoMAP.set('edad', '27')
nuevoMAP.set('trabajo', 'psicologo')

// Comprobar si un valor existe, es con .has
console.log(nuevoMAP.has('nombre'))

// Para obtener un objeto es con .get
console.log(nuevoMAP.get('trabajo'))

// Y para limpiar todo el objeto .clear
nuevoMAP.clear()

console.log(nuevoMAP)



const prueba = new Map ([ ['nombre', 'alan'], ['edad', 27], ['trabajo', 'estudiante'] ]) // OTRA FORMA DE ASIGNAR VALORES, haria lo mismo que .set

// Agregar nuevos valores al objeto
prueba.set('dr', 'DR STRANGE')
prueba.set('nombre', 'Alberto') // Se reasigna el valor

// Con map tambien se puede iterar sobre el objeto
prueba.forEach((persona, index) => {
    // console.log(persona) nos asigna el valor

    console.log(index) // nos asigna la llave
})

console.log(prueba)