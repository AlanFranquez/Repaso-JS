// Self
// es un llamado a la ventana window, es basicamente lo mismo que usar ese termino

self.onload = () => {
    console.log('Pagina cargada!')
}

// tambien hay mucha gente que lo utiliza de otra forma y es usandolo en el lugar del this
// window.identidad = 11111

const pruebaOBJ = {
    nombre: 'Alan',
    apellido: 'Fránquez',
    identidad: 23,
    mostrarIdentidad: function() {

        const self = this;
        
        console.log(`La identidad es ${self.identidad}`)
    }
}

pruebaOBJ.mostrarIdentidad()