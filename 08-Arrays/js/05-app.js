const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];


// Este metodo para agregar 
dias[8] = 'Nuevo día'; // Es un poco confuso y no siempre sirve ya que hay que saber el ancho del array y no se pone automaticamente



// Un mejor metodo es usar metodos que tienen los arreglos, que ayudan a poner los numeros en el principio o final
// Ejemplo

const carrito = [];

// Supongamos que quiero añadirle algo a este carrito, se usa push (esto agrega siempre hacia el final);

const producto1 = {
    nombre: 'Televisión',
    precio: 1200
}

carrito.push(producto1);

const producto2 = {
    nombre: 'Air Planes',
    precio: 1600
}

carrito.push(producto2);

const producto3 = {
    nombre: 'Celular',
    precio: 2000
}

carrito.push(producto3);

// Ahora supongamos que quiero agregar algo al principio del arreglo, para eso usaria el unshift;

const producto4 = {
    nombre: 'Smart Watch',
    precio: 900
}

carrito.unshift(producto4); // Lo coloca al principio



console.table(carrito)

// Está es la forma imperativa de hacerlo
// Modifica la variable original