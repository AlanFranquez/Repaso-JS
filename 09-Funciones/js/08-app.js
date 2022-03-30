// Como se pasan los valores entre las funciones

function sumar(a, b) {
    return a+b
}


const resultado = sumar(2, 5);
console.log(resultado);

// Ejemeplo avanzado

let total;
total = 0;

function primera(suma) {
    return total += suma;
}

primera(10);
primera(30);
primera(40);
primera(50);
console.log(total); // 130


function iva(precio) {
    return total *= precio;
}


iva(2.5);
console.log(total)


// Otro ejemplo
let final = 0;

function agregarCarrito(precio) {
    return final += precio;
}

function calcularImpuestos(final) {
    return final * 1.25
}

final = agregarCarrito(300);
final = agregarCarrito(300);
final = agregarCarrito(400);

const totalAPagar = calcularImpuestos(final)

console.log(totalAPagar)
console.log(final)