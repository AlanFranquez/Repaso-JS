// Hoisting
// Javascript se ejecuta en 2 pasadas, o 2 vuletas
// EN la primera se registran las variables y en la segunda se ejecuta


// diferencia entre function declaration y function expression
// una function expression no puede mandarse a llamar antes de ser declarada



mostrarNombre('Alan'); // Esto no va a funcionar

const mostrarNombre = function(nombre) {
    console.log(`Su nombre es ${nombre}`)
}

mostrarApellido('Fránquez') // Esto si va a funcionar 
function mostrarApellido(apellido) {
    console.log(`Su apellidon es ${apellido}`)
}