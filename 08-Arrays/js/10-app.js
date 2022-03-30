// Diferencia entre el ForEach y el map

// La princiapl diferencia es que el map crea un nuevo arreglo cuando recorre el arreglo mientras que el ForEach modifica la original


const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7},
]


const arrFor = carrito.forEach((estudiante) => {
    return `El estudiante ${estudiante.nombre} tiene una edad de ${estudiante.Edad}`;
});

const arrMap = carrito.map((estudiante) => {
    return `El estudiante ${estudiante.nombre} tiene una edad de ${estudiante.Edad}`;
});


console.log(arrFor); // Undefined
console.log(arrMap); // Me va a mostrar algo
