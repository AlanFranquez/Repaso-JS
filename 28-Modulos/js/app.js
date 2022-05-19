// Si no es un export por default se utilizan los {}
// Los imports siempre deben ir arriba

// El export default, va por fuera de los {} y se le puede poner el nombre que quiera
// a los export default tambien se le puede poner cualquier nombre de la siguiente forma: leer as LEER
import holaCambiado, { nombreDelCliente, tipoCliente, leer, dinero, comprobarAhorro, Cliente } from "./cliente.js"; // Es necesario ponerle la extension .js
import {Empresa} from "./empresa.js"

holaCambiado()

console.log(nombreDelCliente)
console.log(tipoCliente)

// Importar funciones
console.log(leer(nombreDelCliente, tipoCliente))

comprobarAhorro(dinero)

//Importar clases
// Asignarla
const cliente = new Cliente(nombreDelCliente, tipoCliente)

console.log(cliente)
console.log(cliente.mostrarDatos())

// Clase heredada
const empresa = new Empresa('Alan', 'PREMIUM', 'Empresa digital');
console.log(empresa)
console.log(empresa.mostrarDatos())


