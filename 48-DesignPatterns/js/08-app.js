// Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, inciiamos con u precio de $${precio}`)
    },
    vendido: comprador => {
        console.log(`Vendido al comprador: ${comprador}`)
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} y su cantidad es de $${cantidad}`)
    }
}


function Subasta() {
    let compradores = {};

    return  {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this
        }
    }
}


// Crear objetos

const juan = new Comprador('Juan')
const pablo = new Comprador('Pablo')
const vendedor = new Vendedor('vendedor de autos');
const subasta = new Subasta()

// Tienes que registrarlos
subasta.registrar(juan)
subasta.registrar(pablo)
subasta.registrar(vendedor)

vendedor.oferta('Mustang 666', 600)

juan.oferta(350, juan)
pablo.oferta(450, pablo)

vendedor.vendido('pablo')

