// Operador ternario, otra forma de evaluar
// En total son 3, if, switch y Operador ternario

const prueba = true;
const prueba2 = true

console.log(prueba ? 'La prueba es verdadera' : 'La prueba es falsa');

// Los spread operator pueden tener spreado operators anidados, ejemplo:

console.log(prueba ? prueba2 ? 'La prueba 2 resulto verdadera' : 'la prueba 2 es falsa' : 'la prueba 1 es falsa')

// Los if tambien pueden tener ifs anidados. es decir if adentro de ifs

const prueba3 = true;

if(prueba) {
    if (prueba2) {
        console.log('Es verdadero')
    }
} else {
    console.log('Es falso')
}
 


// Ejerccicio fizz buzz

for(let i = 0; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} - Fizz Buzz`)
    } else if(i % 5 === 0) {
        console.log(`${i} - Fizz`)
    } else if (i % 3 === 0) {
        console.log(`${i} - buzz`)
    } else {
        console.log(i)
    }
}