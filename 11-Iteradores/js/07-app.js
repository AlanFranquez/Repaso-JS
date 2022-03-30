// Veremos ahora For of

const tareas = ['Jugar a la pelota', 'bañar al perro', 'tomar la medicación', 'estudiar'];

const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7}
]

// es muy parecido al for loop, pero en este caso se asigna un nombre al recorrido (lo primero)

for(let tarea of tareas) {
    console.log(tarea)
}

for(let nombre of carrito) {
    console.log(nombre.nombre)
}

// for of itera sobre arreglos. For in itera sobre objetos