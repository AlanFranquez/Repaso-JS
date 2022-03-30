// Como quitar una propiedad de un objeto a una variable

// Lo que se me ocurriria sería lo siguiente
const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700
}

const nombreExtraido = auto.nombre;
console.log(nombreExtraido);

// Pero existe otro metodo que es el Destructuring Object
// const {nombre de la propiedad} = nombre del objeto del cual la extraeremos;

const {year} = auto;
console.log(year)

// Tambien se pueden sacar varias de una
const {nombre, precio} = auto;

console.log(nombre)
console.log(precio)