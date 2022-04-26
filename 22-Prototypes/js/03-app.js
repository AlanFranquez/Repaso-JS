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


const nuevoUsuario = new usuario('Alberto', 6000); // asignamos este valor
console.log(nuevoUsuario)

// Se pone el usuario asignado y el prototype
console.log(nuevoUsuario.nuevaFuncion())

console.log(nuevoUsuario.nombreComprobante());

nuevoUsuario.restarValor(3000)
console.log(nuevoUsuario.nuevaFuncion())


console.log(nuevoUsuario)