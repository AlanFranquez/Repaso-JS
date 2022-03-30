// ForEach y map
// Ambos son ideales para recorrer arreglos

const tareas = ['Jugar a la pelota', 'bañar al perro', 'tomar la medicación', 'estudiar'];


// Algo para saber: el segundo argumento de ForEach es un indice que te dice la posición donde está una de las tareas

tareas.forEach((tarea, indice) => {
    console.log(`${tarea} se encuentra en la posición ${indice}`)
})


const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7}
]

carrito.forEach(objetos => console.log(objetos.nombre));

carrito.map(objetos => console.log(objetos.nombre));

// Recordar el map y el forEach hacen lo mismo, la diferencia es que el map crea un arreglo nuevo y el forEach no
// Comprobación acá abajo

const eacheo = carrito.forEach(obj => obj.nombre);

const mapeo = carrito.map(obj => obj.nombre);

console.log(eacheo) // dara undefined;
console.log(mapeo) // dara el resultado de recorrer el arreglo