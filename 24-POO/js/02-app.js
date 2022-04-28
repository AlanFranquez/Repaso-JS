// Metodos (prototypes, seria lo mismo)
// Funciones especificas para esa clase

// Es mucho más facil que con los prototypes
class Cliente {
    constructor(nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }

    mostrarInformacion() {
        return `El cliente llamado ${this.nombre}, tiene un sueldo de ${this.sueldo}`
    }


    // Static es otra forma de hacer estas funciones
    // Pero su diferencia es que en este caso solo se puede llamar con el nombre de la clase y no con la variable asignada
    static bienvenida() {
        return 'Hola, bievenidos a todos.'
    }
}
 
const primerCliente = new Cliente('Alan', 10000);

console.log(primerCliente.mostrarInformacion())

//Static
console.log(Cliente.bienvenida())


// Metodos pero con la otra forma de crear clases
const Cliente2 = class {
    constructor(nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }

    nuevaFuncion() {
        return `Su nombre es ${this.nombre} y su sueldo es de ${this.sueldo}`
    }
}

const otroCliente = new Cliente2('Juan', 80);
console.log(otroCliente.nuevaFuncion())