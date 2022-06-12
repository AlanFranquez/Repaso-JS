const cripotomonedasSelec = document.querySelector('#criptomonedas');
const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado')

// Crear un promise
const mostrarCriptos = criptomonedas => new Promise((resolve) => {
    resolve(criptomonedas)
})


document.addEventListener('DOMContentLoaded', () => {

    // Rellenar el option
    consultarCriptomonedas();

    form.addEventListener('submit', traerDatos)

});


async function consultarCriptomonedas() {
    // Esto nos traerá las 10 más populares
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';


    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const criptomonedas = await mostrarCriptos(datos.Data);

        optionCriptos(criptomonedas)
    } catch (error) {
        console.log(error)
    }

}

function optionCriptos(criptomonedas) {
    criptomonedas.forEach((cripto) => {
        // console.log(cripto)
        const {Name, FullName} = cripto.CoinInfo // Para acceder al objeto que está adentro del objeto

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName; // Esto será lo que verá el usuario

        cripotomonedasSelec.appendChild(option)
    })
}

function traerDatos(e) {
    e.preventDefault();

    // Validar 
    const moneda = document.querySelector('#moneda').value;
    const criptomonedasInput = document.querySelector('#criptomonedas').value;

    if(moneda === '' || criptomonedasInput === '') {
        imprimirAlerta('Por favor, rellene todos los campos');
    };

    // LLAMAR API
    llamarAPI(moneda, criptomonedasInput);
}


async function llamarAPI(moneda, criptomonedasInput) {

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedasInput}&tsyms=${moneda}`;

    // Acá se coloca el spinner generalmente antes de usar fetch
    mostrarSpinner()
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        mostrarResultados(datos.DISPLAY[criptomonedasInput][moneda])
    } catch (error) {
        console.log(error)
    }

   
}


function imprimirAlerta(mensaje, tipo) {

    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const divMensaje = document.createElement('DIV');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('error', 'norepetir');
    
        resultado.appendChild(divMensaje)

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

    
}

function mostrarResultados(resultados) {

    limpiarHTML();

    const {LASTUPDATE, HIGHDAY, PRICE, LOWDAY} = resultados;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `
        Su precio es <span>${PRICE}</span>
    `;

    const precioMasAlto = document.createElement('p');
    precioMasAlto.classList.add('precio')
    precioMasAlto.innerHTML = `
        Precio más alto del día: ${HIGHDAY}
    `;

    const precioMasBajo = document.createElement('p');
    precioMasBajo.classList.add('precio')
    precioMasBajo.innerHTML = `
        Precio más bajo del día: ${LOWDAY}
    `;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.classList.add('precio');
    ultimaActualizacion.innerHTML = `
        Ultima Actualización: ${LASTUPDATE}
    `;
    




    resultado.appendChild(precio)
    resultado.appendChild(precioMasAlto)
    resultado.appendChild(precioMasBajo)
    resultado.appendChild(ultimaActualizacion)

    form.reset()
}

function limpiarHTML() {
    resultado.innerHTML = ''
}

function mostrarSpinner() {
    limpiarHTML()

    const div = document.createElement('div');
    div.classList.add('spinner')
    div.innerHTML = `
        <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    `

    resultado.appendChild(div)
}