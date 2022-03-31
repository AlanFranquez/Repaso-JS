// QuerySelectorAll

const contenedor = document.querySelectorAll('.contenedor');
console.log(contenedor);

// Tambien se puedee hacer lo mismo con id, pero no es buena practica tener más de un id con el mismo nombre

// Qué pasa si es un elemetno que no existe'
const noexiste = document.querySelectorAll('Noexiste');

console.log(noexiste)