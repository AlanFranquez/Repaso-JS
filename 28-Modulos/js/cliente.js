//  export = quitar los modulos para ponerlos en otro lado
// import = poner los modulos en otro lado
// para que esto funcione el archivo principal debe tener type=module en el script de html

export const nombreDelCliente = 'Alan Fránquez';
export const tipoCliente = 'Premium';
export const dinero = 300;

// Exportar funciones 
export function leer(nombre, tipo) {
    return `Cliente ${nombre} - es un tipo ${tipo}`
}

export function comprobarAhorro(ahorro) {
    if(ahorro > 200) {
        console.log('El usuario tiene dinero')
    } else if(ahorro == 200) {
        console.log('El usuario está bien ')
    } else {
        console.log('el usuario está jodido')
    }
}

export class Cliente {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }


    mostrarDatos() {
        return `El cliente ${this.nombre} es de tipo ${this.tipo}`
    }
}

// Export default, solo puede haber uno
export default function hola() {
    console.log('Buenas tardes')
}