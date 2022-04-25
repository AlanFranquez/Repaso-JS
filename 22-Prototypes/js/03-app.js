function usuario(nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}

usuario.prototype.nuevaFuncion = function() {
    if(this.saldo <= 6000) {
        return 'Usuario Premium'
    } else if(this.saldo <= 5000) {
        return 'usuario gold'
    } else {
        return 'es pobre'
    }
}


const nuevoUsuario = new usuario('Alberto', 6000); // asignamos este valor
console.log(nuevoUsuario)

// Se pone el usuario asignado y el prototype
console.log(nuevoUsuario.nuevaFuncion())