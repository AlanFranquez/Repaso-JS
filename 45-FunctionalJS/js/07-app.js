// FUNCIONES QUE RETORNAN FUNCIONES

const obtenerunCliente = () => () => console.log('Alan Fránquez');

const funcion = obtenerunCliente();

funcion()