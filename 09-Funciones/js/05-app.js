// Existen los parametros y los argumentos, los identificaremos

function sumar(a, b) { // a y b son parametros, son variables que pueden ser modificadas
    console.log(a+b)
};


sumar(2,3); // Los numeros 2 y 3 son argumentos, estos le asignan valores a los parametros; a = 2 y b = 3
sumar(133, 298);

// Por ejemplo una función de saludo

function saludar(usuario) {
    console.log(`Hola ${usuario}, espero que tengas un lindo día`);
}


saludar('Alan');