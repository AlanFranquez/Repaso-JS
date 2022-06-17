// Loop de eventos
// Los datos se acumulan en el stack y algunos en queue, segun su prioridad
// una vez el stack esta vacio se pasan los datos acumulados en stack

console.log('primero');

console.log('segundo');

setTimeout(() => {
    console.log('tercero')
}, 0);


setTimeout(() => {
    console.log('cuarto')
}, 0);

console.log('quinto')

new Promise((resolve) => {
    resolve('6to, promesa')
}).then(console.log)


function hola() {
    console.log('Hi')
}

hola()