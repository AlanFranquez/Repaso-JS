//Currying, dividir una funcion que toma más de un parametro, en argumentos de forma parcial


const suma = (a,b,c) => a+b+c;

const parcial = (a) => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const segundoYtercer = primerNumero(10, 20)
console.log(segundoYtercer)



// console.log(suma(1,2,3))

// tambien se puede dividir los 3 argumentos en 3

const parcial3 = (a) => (b) => (c) => suma(a,b,c);

const numeroUno = parcial3(5);
const numero2 = numeroUno(23);
const numero3 = numero2(26);
console.log(numero3)