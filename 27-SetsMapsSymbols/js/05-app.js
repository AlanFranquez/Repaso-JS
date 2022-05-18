// Propiedad que se usa mucho para no mostrar valores
const symb1 = Symbol('1');
const symb2 = Symbol('1')

if(symb1 === symb2) {
    console.log('SON IGUALES')
} else {
    console.log('No existen symbols iguales')
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar elementos con llave y valor
persona[nombre] = 'Alan'
persona[apellido] = 'Fránquez';
persona.tipoCliente = 'Premium'

// Los valores de nombvre y apellido no se muestran de que són, para hacerlo se usa la sigueinte propiedad
console.log(persona[nombre])

console.log(persona)

// IMPORTANT: Los symbols no son iterables
for(let i in persona) {
    console.log(i); // solo se mostrará el tipo cliente
}

// Comparación con un objeto nomral
const obj = {
    nombre: 'AAA',
    apellido: 'Peréz',
    tipoCliente: 'premium'
}

for(let i of obj) {
    console.log(i)
}