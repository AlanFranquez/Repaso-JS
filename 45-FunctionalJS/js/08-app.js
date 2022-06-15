// CLOSURES
// ES la forma de poder sacar el valor de una variable de adentro de una funcion
// generalmente las variables que estan en una funcion no pueden usarse afuera debido al scope
// esto es solucionado por el closure

const obtenerCliente = () => {
    const cliente = "Juan";

    function prueba() {
        console.log('Alan')
    }

    return prueba
}


const cliente = obtenerCliente();
cliente()