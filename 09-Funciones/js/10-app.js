// Las arrow function son otra forma de escribir funciones que traen numerosas ventajas
// Algunas de ellas son, si lo de adentro de la función es de una sola linea entonces los {} son opcionales
// pasa lo mismo con el return, si es solo una linea se da por implicito y no es necesario ponerlo

// A continuación un ejemplo de como se haria una función normal

const aprendiendo = function () {
    console.log('Aprendiendo programación en Udemy');
}

aprendiendo();

const aprendiendoArrow = () => 'Aprendiendo Javascript!!!!'

console.log(aprendiendoArrow());