import { Cliente } from "./cliente.js";

// HEREDAR UNA CLASE
export class Empresa extends Cliente {
    constructor(nombre, tipo, categoria) {
        // Super para heredar los antiguos argumentos que son iguales
        super(nombre, tipo)
        this.categoria = categoria
    }

    mostrarDatos() {
        return `El cliente ${this.nombre} es de tipo ${this.tipo} y su categoria es ${this.categoria}`
    }
}