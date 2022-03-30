// Existen 2 metodos muy comunes para unir 2 objetos.
// Assign

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,
    disponibilidad: true
}

const persona = {
    edad: 20,
    altura: "191cm"
}


const unir = Object.assign(auto, persona);
console.log(unir)


// La otra forma de unir es con el Spread Operator que serían ... así y el nombre del objeto para copiarlo.

const unir2 = {...auto, ...persona};
console.log(unir2);