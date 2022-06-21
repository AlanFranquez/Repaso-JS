// Singleton
// En tewrminos simples lo que hace es que no permite que un objeto o clase se instancie más de una vez
// Para eso se utiliza cierto codigo que cumple dicha funcion

let instancia = null;

class Persona {
    constructor(nombre, email, sueldo) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            this.sueldo = sueldo;
            instancia = this;
        } else {
            return instancia
        }
    }
}


const nuevaPersona = new Persona('Alan', 'alan@alan.com', 123412341);
console.log(nuevaPersona)

const nuevaPersona2 = new Persona('Santiago', 'santiago@santiago.com', 123131)
console.log(nuevaPersona2)