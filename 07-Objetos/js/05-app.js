// Objetos Anidados, objetos dentro de otros objetos

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,

    informacion: {
        medida: {
            kg: '1kg',
            cm: '30cm'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


console.log(auto)
console.log(auto.informacion)

console.log(auto.informacion.fabricacion.pais);