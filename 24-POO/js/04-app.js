// Propiedades privadas en javascript

class clase {

    #nombre;

    // constructor(nombre, saldo) {
    //     this.#nombre = nombre,
    //     this.saldo = saldo
    // }

    // mostrarNombre() {
    //     return `El nombre del usuario es ${this.#nombre}`
    // }


    setNombre(nombre) {
        this.#nombre = nombre
    }

    getNombre() {
        return this.#nombre
    }
}


// const juan = new clase('Juan', 800);
const juan = new clase();


// console.log(juan.mostrarNombre())
juan.setNombre('Alan')
console.log(juan.getNombre())