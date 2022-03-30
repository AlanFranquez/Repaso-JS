// Buenas practicas a la hora de evaluar booleanos

const autenticado = true;


// No es necesario poner autenticado === true, se da por implicito
if(autenticado) {
    console.log('Felicidades, estás logueado')
} else {
    console.log('Lo lamento, no estás autenticado')
}


// Operador ternario, es más sencillo que el if ? :

const autenticado2 = false;

console.log(autenticado2 ? 'Felicidades, te logueaste' : 'No te has logueado pibe')