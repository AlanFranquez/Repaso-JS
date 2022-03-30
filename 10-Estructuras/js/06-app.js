// Operador &&
// Este revisa que ambas condiciones se cumplan, si una no se cumple entonces no es valido

const prueba1 = true;
const prueba2 = false;

// ! el signo de exlamación al principio es lo contrario a lo que se dice
// prueba1 = true, !prueba1 = false

if(prueba1 && prueba2) {
    console.log('No dara esto')
}else if(!prueba1 && !prueba2) {
    console.log('Ambas con falsas')
} else if(!prueba1) {
    console.log('Veremos si la prueba 1 es falsa')
} else {
    console.log('dara esto, ya que una se cumple y la otra no')
}