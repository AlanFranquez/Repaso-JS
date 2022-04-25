// Existen dos formas de crear objetos, las más comunes

// Object literal, se usa mucho pero es poco dinamica
const producto = {
    nombre: 'Televisión',
    precio: 300,
    disponibilidad: true
}

console.log(producto)

// Object constructor, que es una forma más avanzada y dinamica

function producto2(nombre, precio, disponibilidad) {

    this.nombre = nombre,
    this.precio = precio,
    this.disponibilidad = disponibilidad

}


// ponemos new y el nombre de la función, en este caso producto2
const nombre = new producto2('Tele', 44, true)
console.log(nombre)