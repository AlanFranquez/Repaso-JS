// Operadores estrictos

const numero1 = 50;
const numero2 = 60;
const numero3 = "50";

// el = es para asignar valor, el == es para comparar
console.log(numero1 == numero3); // true

// === es un comparador más estricto, compara incluso el tipo de dato
console.log(numero1 === numero3) // falso
console.log(numero1 === parseInt(numero3)) // true

// != compara si son diferentes
console.log(numero1 != numero2) // true;
console.log(numero1 != numero3) // false
console.log(numero1 !== numero3) // true