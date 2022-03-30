// MATH

let resultado;

// Con math.Pi sacaremos el valor de PI
resultado = Math.PI;
console.log(resultado);


// Con Round se redondea
resultado = Math.round(2.4)
resultado = Math.round(2.5)
resultado = Math.round(2.6);

console.log(resultado);


// con ceil se redondea siempre hacia arriba
resultado = Math.ceil(2.2);

console.log(resultado);

//con floor se redondea hacia abajo
resultado = Math.floor(2.8);
console.log(resultado)

// con sqrt se saca la raiz cuadrada;

resultado = Math.sqrt(144);
console.log(resultado)

// Con abs es para valor absoluto

resultado = Math.abs(-424)
console.log(resultado)

// con max el maximo
resultado = Math.max(12,134, 11, -1);
console.log(resultado)

// con min el minimo
resultado = Math.min(12, 11, 10, -5);
console.log(resultado)

// y con pow la potencia
resultado = Math.pow(2, 4);
console.log(resultado)

// Para gneerar numeros random
resultado = Math.random();
console.log(resultado)

resultado = Math.round(Math.random() * 20);
console.log(resultado)



const prueba = prompt('Elegi un numero y te entregaremos la raiz cuadrada');

const pruebita = Math.sqrt(prueba)
console.log(pruebita)