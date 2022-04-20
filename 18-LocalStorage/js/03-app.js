// Para eliminar un elemento del localStorage
localStorage.removeItem('nombre');




const nombre = ['Juan', 'Pedro', 'Cabeza']
const nombreHecho = JSON.stringify(nombre);
localStorage.setItem('array', nombreHecho);

// NO existe una forma de actualizar un elemento en el localStorage
// Pero se puede hacer lo siguiente

const traerArray = localStorage.getItem('array');
const traerArrayConvertido = JSON.parse(traerArray)

console.log(traerArrayConvertido)
traerArrayConvertido.push('Andrés');
console.log(traerArrayConvertido)


localStorage.setItem('array', JSON.stringify(traerArrayConvertido)) // lo convertimos a string