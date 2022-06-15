// funcion pura
// function que no modifica el valor de las variables
// el resultado será una nueva variable con el nuevo valor
// Importante, debe retornar un solo valor


const numeroEJ = 30;

const nuevaFunction = (numero) => {
    return numero *2;
}


const resultado = nuevaFunction(numeroEJ);

console.log(resultado)
console.log(numeroEJ)
