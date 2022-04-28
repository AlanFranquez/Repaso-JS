class Cliente {
    constructor(nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }

    mostrarInformacion() {
        return `El cliente llamado ${this.nombre}, tiene un sueldo de ${this.sueldo}`
    }

    static bienvenida() {
        return 'Hola, bievenidos a todos.'
    }
}

const juan = new Cliente('Juan', 9999)
console.log(juan)
console.log(juan.mostrarInformacion())


// Como heredar una clase, sencillo
class Empresa extends Cliente {
    constructor(nombre, sueldo, categoria, telefono) {
        // Para poder usar los valores que se usaron en la clase heredada se hace lo siguiente
        super(nombre, sueldo);

        // con el resto se hace normal ya que son valores nuevos
        this.categoria = categoria,
        this.telefono = telefono
    }

    // Si a un metodo le ponemos el mismo nombre que a uno de la clase heredada se sobrescribiria, ejemplo:
    static bienvenida() {
        return 'Hola, prueba de rescribir.'
    }
    
}

const otroCliente = new Empresa('Empresa de Alan', 70000, 'Programación', 09999999)
console.log(otroCliente);
console.log(otroCliente.mostrarInformacion()) // Puedo usar los metodos de la clase que herede

console.log(Empresa.bienvenida())