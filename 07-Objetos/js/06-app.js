// Destructuring de objetos

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


// Para entrar a un objeto anidado se debe hacer asi informacion: {medida}. Esto habilitara la medida pero no se puede acceder así a información
// Si quisiera tener informacion y medida tendría que hacer lo siguiente {informacion, informacion: {medida}}


const {nombre, informacion, informacion: {medida: {cm}, fabricacion: {pais}}} = auto;

console.log(cm);
console.log(pais);