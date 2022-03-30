// existen otras propiedad de objetos que se utilizan mucho
// key, values, entries

const auto = {
    nombre: 'Mustang',
    year: 1919,
    disponibilidad: true
}

console.log(Object.keys(auto)); // me mostrara el nombre de las propiedades, es decir, nombre, year, disponibilidad.

console.log(Object.values(auto)) // me mostrar los valores de las propiedades, es decir lo de la izquierda, por ejemplo Mustang

console.log(Object.entries(auto)) // me mostrara ambas cosas separadas de par en par.