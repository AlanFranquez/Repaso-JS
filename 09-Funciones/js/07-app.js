// Como se comunican las funciones


prueba();
function prueba() {
    console.log('Primera función');

    segunda();

    autenticacion('Alan');
}


function segunda() {
    console.log('Está función se ejecuta luego de la primera...');

    autenticacion('Pedro')
};

function autenticacion(usuario) {
    console.log(`El usuario ${usuario} ha sido autenticado con exito`)
}