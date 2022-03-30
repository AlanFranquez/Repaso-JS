// Existen varios metodos para crear objetos

// Object Literal
const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700
}

// Constructor

function Producto(nombre, year) {
    this.nombre = nombre,
    this.year = year,
    this.disponible = true
}

const otroProducto = new Producto('Nissan', 2013);
console.log(otroProducto)

const prueba = prompt('Nombre del auto?')
const prueba2 = prompt('Año?')

const nuevoProducto = new Producto(prueba, prueba2);

console.log(nuevoProducto)



function otraPrueba(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad,
    this.identificacion = sexo;

}


const persona1 = new otraPrueba('Alan', 12, 'Hombre')
console.log(persona1)