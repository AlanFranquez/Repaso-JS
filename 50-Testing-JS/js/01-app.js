// Un pequeño framework de testing basico
// con javscript vanila

function suma(a,b) {
    return a+b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(25, 25);
let esperado = 50;

if(resultado !== esperado) {
    console.error('El resultado no es el esperado')
} else {
    console.log('El resultado SI es el esperado')
}

resultado = restar(30, 30);
esperado = 0;

if(resultado !== esperado) {
    console.error('El resultado fue inesperado')
} else {
    console.log('El resultado fue el esperado')
}