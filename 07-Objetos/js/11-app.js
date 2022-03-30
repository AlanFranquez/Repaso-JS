// Ahora veremos la palabra this
// Está palabra sirve para mencionar propiedades que están adentro del objeto

const nombre = 'Ford';
const year = 1919;

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,
    disponibilidad: true,
    mostrarPropiedades: function() {
        console.log(`El nombre del auto es ${this.nombre} y fue creado en el año ${this.year}`); // de esta forma se soluciona
    }
}


// Como podemos ver en este caso, no se reconocen las variables del objeto, sino más bien las de afuera. Para solucionar esto se agrega un {this.nombre}
//  y {this.year}

const auto2 = {
    nombre: 'Chevrolet',
    year: 1888,
    precio: 1300,
    disponibilidad: true,
    mostrarPropiedades: function() {
        console.log(`El nombre del auto es ${this.nombre} y fue creado en el año ${this.year}`);
    }
}

auto.mostrarPropiedades();
auto2.mostrarPropiedades();