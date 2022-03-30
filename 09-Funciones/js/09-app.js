// Funciones en un objeto, Metodos de propiedad

const canciones = {
    reproducir: function (id) {
        console.log(`Reproduciendo la canción con el id ${id}`)
    },
    pausar: function (id) {
        console.log('Pausando la canción...');
    },
    borrar: function (id) {
        console.log('Borra la canción con el id ${id}');
    },
    crearPlaylist: function (nombre) {
        console.log(`Se creo una playlist con el nombre de ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Se reproducira la playalist ${nombre}...`)
    } 
}

// Siempre que trabajamos con un objeto tenemos disponible la sintaxis de .
canciones.reproducir(30);
canciones.pausar();

// Tambien se pueden agregar las funciones desde afuera

// canciones.borrar = function borra(id) {
//     console.log(`Borrar la canción con el id ${id}`)
// }

canciones.borrar(39);
canciones.crearPlaylist('Rock Nacional');
canciones.reproducirPlaylist('Bachatas');