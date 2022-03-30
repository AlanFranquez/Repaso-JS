// Else if
// El if siempre se ejecuta la primera opción valida y se deja de ejecutar
// es decir si por ejemplo se cumple el if, y el else if tambien, solo se ejecutar el if

const puntaje = 10;
const puntaje2 = 5;
const ganador = true;


if(puntaje >= puntaje2) {
    console.log('Es mayor')
}else if(ganador) {
    console.log('Sos el ganador!!')
} else {
    console.log('Es menor')
}