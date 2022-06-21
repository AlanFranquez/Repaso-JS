// Constructor pattern
// Es un patron de diseño en el cual hay una clase padre y el resto de clases heredan de esa.

// Generalmente este patron se utiliza cuando se usan clases que no pueden ser asignadas, javascript no permite eso
class Empresa {
    constructor(nombreEmpresa, sueldo) {
        this.nombreEmpresa = nombreEmpresa;
        this.sueldo = sueldo
    }
};

class cliente extends Empresa {
    constructor(nombreEmpresa, sueldo, nombre) {
        super(nombreEmpresa, sueldo);
        this.nombre = nombre
    }
}

const nuevaEmpresa = new Empresa('Tech', 15000);
console.log(nuevaEmpresa)

const nuevoCliente = new cliente('Empresa Nueva', 17000, 'Alan');
console.log(nuevoCliente)