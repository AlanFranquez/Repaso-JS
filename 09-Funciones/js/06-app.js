// Tambien existen los parametros por default
// Son los parametros que se utilizan cuando una funcion no recibe argumentos, y tiene que llenar un espacio

function saludar(usuario = 'desconocido', apellido = '') {
    console.log(`Hola ${usuario} ${apellido}, espero que tengas un lindo día`);
}


saludar(); // Si no se coloca nada entonces el mensaje que se entregara será "Hola desconocido, espero que tengas un lindo día."