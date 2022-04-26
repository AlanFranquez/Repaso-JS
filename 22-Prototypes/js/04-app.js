// =========================
// HEREDAR UN PROTOTYPE
// ======================


function usuario(nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}
// Se utiliza el function y no el arrow function, ya que el function busca en la ventana local y el arrow function se va a la global
usuario.prototype.nuevaFuncion = function() {
    if(this.saldo >= 6000) {
        return 'Usuario Premium'
    } else if(this.saldo >= 5000) {
        return 'usuario gold'
    } else {
        return 'es pobre'
    }
}

usuario.prototype.nombreComprobante = function() {
    if(this.nombre === 'Alberto') {
        return 'El es el administrador del lugar'
    } else {
        return 'Es un empleado'
    }
}

usuario.prototype.restarValor = function(retira) {
    this.saldo -= retira;
}


const nuevoUsuario = new usuario('Alberto', 6000);


// Heredar un protoype

function Persona(nombre, saldo, telefono) {
    // this.nombre = nombre,
    // this.saldo = saldo,
    // No usaremos estos dos ya que, al haberlo usado anteriormente podemos heredarlos
    usuario.call(this, nombre, saldo)
    this.telefono = telefono
}

// Tenemos el constructor, pero nos faltan las funciones
Persona.prototype = Object.create(usuario.prototype) // esto nos dara las funciones
// Tendremos que volver a habilitar el constructor
Persona.prototype.constructor = usuario;


// Debe asignarse el valor despues de haberse asignado el constructor y las funciones, si no no funcionara
// Asignar un valor
const alan = new Persona('Alan Santiago', 6000, 3123123)

console.log(alan)
console.log(alan.nuevaFuncion());


// Ahora podemos asignarle un protoype a esa función en especifica, y la misma solo se asignara a esa y no a la otra.
// Esa funcion que le da prototypes a otras funciones se le conoce como Object GOD.

Persona.prototype.numeroTelefono = function() {
    return `El numero de telefono del usuario es ${this.telefono}`
}

console.log(alan.numeroTelefono())