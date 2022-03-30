// Convfertir numeros en string

const numero1 = 20;
const numero2 = "20"
const numero3 = "30.2"
const numero4 = 40;

console.log(numero1);
console.log(Number.parseInt(numero2))
console.log(parseInt(numero2)); // Para convertir un string a numero entero, hace lo mismo que el de arriba
console.log(parseFloat(numero3)) // para convertir un string a numero decimal


// Parc omprobar si un numero es entero se hace lo siguiente;

console.log(Number.isInteger(numero1)); // verdadero
console.log(Number.isInteger(numero3)); // falso
console.log(Number.isInteger(numero1)); // falso
console.log(Number.isInteger(parseInt(numero1))); // verdadero, pasamos el string a numero