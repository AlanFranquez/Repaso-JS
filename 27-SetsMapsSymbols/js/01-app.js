// Set es una forma de crear objetos que simplifica muchas veces el trabajo
// Es algo que se pregunta mucho en entrevistas laborales
// Los set no tienen llave y valor, solo valor

const carrito = new Set();

// Para añdir algo se usa .add
carrito.add('Guitarra');
carrito.add('DISCO');
carrito.add('DISCO 2');
carrito.add('DISCO 3');

// Para comprobar si algo existe en el objeto
console.log(carrito.has('Guitarra')) // true

// Para eliminar algo del carrito
carrito.delete('DISCO')


console.log(carrito)
console.log(carrito.size) // Para ver el tamaño del carrito, en un arreglo común se usa .length

carrito.forEach((producto, index) => {
    // console.log(producto)

    // Sabemos que el segundo argumento en un forEach nos retorna la posición de los objetos sin embargo en un Set nos retorna lo mismo que el primer argumento
    console.log(index)

    // Tambien se puede poner un tercer argumento pero te manda todo, no sirve para mucho
})

// Una pregunta normal en una entrevista de trabajo:
// ELIMINA EL NUMERO DUPLICADO, CON SET ES MUY SENCILLO YA QUE LOS SETS NO ALMACENAN VALORES DUPLICADOS

const prueba = [10,20,30,40,40,50,50];

const resultado = new Set(prueba)

console.log(resultado)