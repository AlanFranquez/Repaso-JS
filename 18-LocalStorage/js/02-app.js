// Como obtener elementos del local storage
// se usa getItems

const obtenerNombre = localStorage.getItem('nombre');
console.log(obtenerNombre)

// Tambien se pueden obtener los objetos
// Pero tenemos que transformarlos en objetos ya que son strings
// Para eso se usa el JSON.parse

const obtenerObjeto = localStorage.getItem('one piece')
const obtenerObjetoConvertido = JSON.parse(obtenerObjeto);
console.log(obtenerObjetoConvertido)

// Con los arrays tambien se usa JSON.parse
const obtenerArray = localStorage.getItem('array');
const obtenerArrayConvertido = JSON.parse(obtenerArray);

console.log(obtenerArrayConvertido)