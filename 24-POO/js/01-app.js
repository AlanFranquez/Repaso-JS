// Clases, son basicamente lo mismo que los prototypes pero se hacen de otra manera, existen 2 formas de crearlas

// Class declaration
class Cliente {
    //Acá van los argumentos
    constructor(nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }
}

// La asignamos
const primerCliente = new Cliente('Alan', 60,000)
console.log(primerCliente)

// La otra forma
// Class expresion
const Cliente2 = class {
    constructor(nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }
}

const segundoCliente = new Cliente2('Fernando', 800)
console.log(segundoCliente)
