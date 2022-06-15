// FUNCIONES COMO ARGUMENTO, PROGRAMACION FUNCIONAL
// en ambos casos puede usarse function normales y arrow function
const suma = (a,b) => {
    return a+b
}

const multiplicar = (a,b) => {
    return a*b
}

// Creamos una tercera función
const hacerCuentas = (fn) => {
    return fn(10, 20)
};


console.log(hacerCuentas(suma)) // 30
console.log(hacerCuentas(multiplicar)) // 200
