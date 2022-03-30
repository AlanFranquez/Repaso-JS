// For loop, el loop más comun de todo

for(let i = 0; i <= 20; i++) {
    console.log(i);
}



// Pregunta normal en entrevista, como identificar los numeros que son pares y los nones
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`${i} es un numero par`)
    } else {
        console.log(`${i} es un numero impar`)
    }
}


// Otra cosa normal que se hace en los for, usarlo para los arrays

const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7}
]

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].Edad)
}