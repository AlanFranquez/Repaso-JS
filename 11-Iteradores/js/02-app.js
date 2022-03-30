//Break y Continue en for loop
// Break corta la ejecución
// Continue te permite interceptar algo y seguir ejecutandose.


// PREGUNTA CLAVE PARA OBTENER UN TRABAJO
// Crear un for loop que al detectar el numero 5 detenga su ejecución

for(let i = 0; i <= 20; i++) {
    if(i === 5) {
        console.log(`Numero ${i} detectado`);

        break;
    }

    
    console.log(i)
}

// OTRA PREGUNTA CLAVE PARA OBTENER UN TRABAJO
// Crear un for loop que al llegar al 5 lo escriba con letras

for(let i = 0; i <= 20; i++) {
    if(i === 5) {
        console.log('Cinco');

        continue;
    }

    console.log(i)
}


// Otro EJERCICIO CLAVE
// Que el for loop identifique cual es el alumno disponible actualmente

const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3, disponible: true},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7}
]


for(let i = 0; i < carrito.length; i++) {

    if(carrito[i].disponible) {
        console.log(`El alumno ${carrito[i].nombre} sé encuentra disponible ahora mismo.`);
        

        continue;
    }

    console.log(carrito[i])
}

