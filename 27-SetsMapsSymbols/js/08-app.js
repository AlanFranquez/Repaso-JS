const ciudades = ['Londres', 'New york', 'Madrid', 'Paris'];

const ordenes = new Set()
ordenes.add(1234)
ordenes.add(123)
ordenes.add(126)
ordenes.add(127)

const datos = new Map();
datos.set('nombre', 'alan');
datos.set('profesion', 'UX/UI');


// Iteradores Default

// Nos brinda valor
for(let ciudad of ciudades) {
    console.log(ciudad)
}

// Nos brinda valor
for(let orden of ordenes) {
    console.log(orden)
}

// Nos brinda llave y valor
for(let dato of datos) {
    console.log(dato)
}



// Iterador entries
// Nos brinda llave y valor,en todos los casos
for(let ciudad of ciudades.entries()) {
    console.log(ciudad)
}

for(let orden of ordenes.entries()) {
    console.log(orden)
}

for(let dato of datos.entries()) {
    console.log(dato)
}

// Iterador values, nos entrega unicamente el valor

for (let ciudad of ciudades.values()) {
    console.log(ciudad)
}

for (let orden of ordenes.values()) {
    console.log(orden)
}

for (let dato of datos.values()) {
    console.log(dato)
}

// Iterador key, nos trae unicamente las llaves
for(let ciudad of ciudades.keys()) {
    console.log(ciudad)
}

for(let orden of ordenes.keys()) {
    console.log(orden)
}

for(let dato of datos.keys()) {
    console.log(dato)
}