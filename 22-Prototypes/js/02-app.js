// El problema de no usar Prototypes:

function producto(nombre, precio, disponibilidad) {
    this.nombre = nombre,
    this.precio = precio,
    this.disponibilidad = disponibilidad;
}


const productoNuevo = new producto('Televisión 24 pulgadas', 123, true);

console.log(productoNuevo)

// Formateamos el objeto, de la siguiente forma
function productoFormateado(producto) {
    
    return `El ${producto.nombre} tiene un precio de ${producto.precio}, y su disponibilidad es: ${producto.disponibilidad}`
}

// ponemos la funcion y entre los parentesis ponemos la variable donde asingamos los valores, es decir en productoNuevo
console.log(productoFormateado(productoNuevo));


function empresa(nombre, precio, disponibilidad, categoria) {
    this.nombre = nombre, 
    this.precio = precio,
    this.disponibilidad = disponibilidad,
    this.categoria = categoria
}

const nuevaEmpresa = new empresa('Amazón', 2345, true, 'Empresa grande')

// no podemos usar esto ya que la parte de categoria no quedaría asignada, por lo tanto deberiamos hacer otra función y formatear la empresa
// Y esto es un proceso tedioso que lleva mucho tiempo y puede ser abrumador para proyectos con muchas lineas de codigo
// console.log(productoFormateado(nuevaEmpresa)) 

function empresaFormateada(empresa) {
    return `El ${empresa.nombre} tiene un precio de ${empresa.precio}, y su disponibilidad es: ${empresa.disponibilidad} y su categoria es: ${empresa.categoria}`;
}


console.log(empresaFormateada(nuevaEmpresa))

