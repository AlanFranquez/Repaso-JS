// Composition
// Una alternativa para las clases, con funciones.



// Se utiliza una funcion adentro de una funcion, por lo tanto se usan parentesis
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`${info.nombre} es el nombre del cliente`)
    }
}) 

const obtenerRegistro = (info) => ({
    mostrarRegistro() {
        console.log(`${info.registro} es el registro del empleado`)
    }
}) 

//Asignar valor a un campo vacio
const asignarEmpresa = info => ({
    asignarleEmpresa(empresa) {
        console.log(`Guardando empresa en ${info.nombre}`);
        info.empresa = empresa;
    }
})
 
const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`${info.empresa} es su respectiva empresa`)
    }
})

function Cliente(nombre, empresa, puesto) {
    let info = {
        nombre,
        empresa,
        puesto
    }

    return Object.assign(info, obtenerNombre(info), obtenerEmpresa(info), asignarEmpresa(info))
}

function Empleado(registro) {
    let info = {
        registro
    }

    return Object.assign(info, obtenerRegistro(info))
}

const cliente = Cliente('Alan Fránquez', null, 'Programador Javascript');

// Estas funciones serían similar a un metodo en una clase
cliente.mostrarNombre();
cliente.asignarleEmpresa('Nueva empresa')
cliente.mostrarEmpresa()

const empleado = Empleado('#230982');
empleado.mostrarRegistro();