//Implicit Binding
// es el this, que se fija en las propiedades del bloque de codigo

const obj = {
    nombre: 'Alan', 
    edad: 20,
    informacion() {
        console.log(`Su nombre es ${this.nombre} y tiene ${this.edad}`)
    },
    mascota: {
        nombre: 'Chobi',
        edad: '2 años',
        mostrarMascota() {
            console.log(`el nombre de la mascota es ${this.nombre} y tiene ${this.edad}`)
        }
    }
};

obj.informacion();

obj.mascota.mostrarMascota()