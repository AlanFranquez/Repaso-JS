// forEach y map con arrow functions

const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7},
]


carrito.forEach(estudiante => console.log(`El estudiante ${estudiante.nombre} tiene una edad de ${estudiante.Edad}`));

const arrMap = carrito.map(estudiante => `El estudiante ${estudiante.nombre} tiene una edad de ${estudiante.Edad}`);


console.log(arrMap)