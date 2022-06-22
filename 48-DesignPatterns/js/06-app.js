// Mixin patterns

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarDatos() {
        console.log(`${this.nombre} y ${this.email} son sus respectivos datos`)
    }
}



// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Juan', 'alan@gmail.com');
console.log(cliente)
cliente.mostrarDatos()
cliente.mostrarInformacion()