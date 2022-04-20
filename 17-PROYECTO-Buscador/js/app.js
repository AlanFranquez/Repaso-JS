// Variables
const resultado = document.querySelector('#resultado');


const year = document.querySelector('#year')
const marca = document.querySelector('#marca')
const minimoSeleccion = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const color = document.querySelector('#color')
const transmision = document.querySelector('#transmision')

// Date
const max = new Date().getFullYear() // Nos traerá el año actual
const minimo = max - 10;
// Eventos
document.addEventListener('DOMContentLoaded', () => {
    generarAutos(autos);

    llenarYear();
})






// Funciones

// Mostrar los autos de la db en el html
function generarAutos(autos) {
    
    // Limpiar HTML
    limpiarHTML()

    autos.forEach((auto) => {
        // Se crea el elemento adentro del forEach si no solo nos traera el primer elemento del arreglo
        const autoHTML = document.createElement('P');

        // Traemos las diferentres partes del auto
        autoHTML.textContent = `
            ${auto.marca} - ${auto.precio} - $${auto.precio} - ${auto.puertas} - ${auto.transmision} - ${auto.year} - ${auto.color}
        `;


        // Se agrega al htmnl como un hijo de resultado
        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML() {
    resultado.innerHTML = ''
}

// Para agregarle los años a la parte de los autos
function llenarYear() {
    for(let i = max; i >= minimo; i--) {
        const selecc = document.createElement('option');
        selecc.value = i;
        selecc.textContent = i;

        year.appendChild(selecc)

    }
}

// Crearems un objeto que iremos llenando con la selección de cada casilla
const objetoSeleccion = {
    marca: '',
    year: '',
    minimoSeleccion: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: ''
}

// Change, cuando se modifique la casilla habra un llamado.
marca.addEventListener('change', (e) => {
    objetoSeleccion.marca = e.target.value;

    filtrarAuto();

})

year.addEventListener('change', (e) => {
    objetoSeleccion.year = parseInt(e.target.value);// Le ponemos parseInt para que nos devuelva en numero

    filtrarAuto();
})

minimoSeleccion.addEventListener('change', (e) => {
    objetoSeleccion.minimoSeleccion = e.target.value;

    filtrarAuto()
})

maximo.addEventListener('change', (e) => {
    objetoSeleccion.maximo = e.target.value

    filtrarAuto()
})

puertas.addEventListener('change', (e) => {
    objetoSeleccion.puertas = parseInt(e.target.value)

    filtrarAuto();
})

transmision.addEventListener('change', (e) => {
    objetoSeleccion.transmision = e.target.value

    filtrarAuto();
})

color.addEventListener('change', (e) => {
    objetoSeleccion.color = e.target.value


    filtrarAuto();
})


// Para filtrar por marca primero se pone la funcion en el addeventlistener
// Luego agregamos una variable con filter y le ponemos una funcion adentro
// la cual derivara a otra que seleccionara si hay una modificación en marca en el objeto
// y nos retornara los autos que tengan la misma marca que la opcion que elegimos
// es importante tambien poner un return auto por si existen valores que no han sido filtrado
// para que se mantengan
function filtrarAuto() {
    const prueba = autos.filter(filtrarMarcas).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTranmision).filter(filtrarColores);

    if(prueba.length == 0) {
        mostrarMensajeError();
    } else {

        generarAutos(prueba)
    }

    // console.log(prueba)
}

function filtrarMarcas(auto) {
    if(objetoSeleccion.marca) {
        return auto.marca === objetoSeleccion.marca
    }
    return auto


}

function filtrarYear(auto) {
    if(objetoSeleccion.year) {
        return auto.year === objetoSeleccion.year 
    }

    return auto
}

function filtrarMinimo(auto) {
    if(objetoSeleccion.minimoSeleccion) {
        // En este caso no  es necesario poner parseInt como en year ya que no es un operador estricto
        return auto.precio >= objetoSeleccion.minimoSeleccion
    }
    return auto
}

function filtrarMaximo(auto) {
    // En este caso no  es necesario poner parseInt como en year ya que no es un operador estricto
    if(objetoSeleccion.maximo) {
        return auto.precio <= objetoSeleccion.maximo;
    }
    return auto
}

function filtrarPuertas(auto) {
    // POnemos un parseInt en este caso ya que tambien son numeros
    if(objetoSeleccion.puertas){
        return auto.puertas === objetoSeleccion.puertas
    }
    return auto
}

function filtrarTranmision(auto) {
    if(objetoSeleccion.transmision) {
        return auto.transmision === objetoSeleccion.transmision
    }
    return auto
}

function filtrarColores(auto) {
    if(objetoSeleccion.color) {
        return auto.color === objetoSeleccion.color
    }

    return auto
}


function mostrarMensajeError() {
    limpiarHTML();

    const div = document.createElement('div');
    div.classList.add('alert', 'error', 'otra')
    div.textContent = 'NO SE PUDO ENCONTRAR SU BUSQUEDA'

    resultado.appendChild(div)
}