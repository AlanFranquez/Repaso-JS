const canciones = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo la canción con el id ${id}`),
    pausar: () => console.log('Pausando la canción...'),
    borrar: id => console.log(`Borra la canción con el id ${id}`),
    crearPlaylist: nombre => console.log(`Se creo una playlist con el nombre de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Se reproducira la playalist ${nombre}...`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`${cancion}`);
    },

    get obtenerCancion() {
        console.log(`obtener ${this.cancion}`)
    }
}

canciones.nuevaCancion = 'Va a Escampar';
canciones.obtenerCancion;

canciones.reproducir(30);
canciones.pausar();


canciones.borrar(39);
canciones.crearPlaylist('Rock Nacional');
canciones.reproducirPlaylist('Bachatas');