// Operador estricto ===

const puntaje = 1;
const puntaje2 = "1";

if(puntaje == puntaje2) {
    console.log('Es verdadero con los ==')
} else {
    console.log('Falso')
}

if(puntaje === puntaje2) {
    console.log('no dará esto')
} else {
    console.log('falso')
}