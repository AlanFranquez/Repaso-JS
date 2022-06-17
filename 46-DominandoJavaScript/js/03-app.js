// Coercion
// Es la conversion explicita o implicita de un tipo de dato a otro
// Algunos ejemplos 

const numero1 = 20;
const numero2 = '40';

console.log(numero1 + numero2); // 2040


console.log(Number(numero2));

// convertir a string
console.log(numero1.toString());
console.log(JSON.stringify(numero1))

// tambien se puede hacer con arreglos
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.toString());
console.log(JSON.stringify(arr))