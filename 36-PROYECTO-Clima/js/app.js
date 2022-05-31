const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario');


document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', buscarClima);
});


function buscarClima(e) {  
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === '') {
        imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    }

    // Consultar API
    consultarAPI(ciudad, pais); // los argumentos son los datos que pusimos arriba
};

function imprimirAlerta(mensaje, tipo) {

    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje
        divMensaje.classList.add('rounded', 'max-w-lg', 'mx-auto','px-4', 'py-3', 'mt-5', 'border', 'text-center', 'norepetir');
    
        if(tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700')
        }
    
        container.appendChild(divMensaje)

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }


};

// RECORDAR, todas las APP son diferentes y se usan de forma diferente

function consultarAPI(ciudad, pais) {

    const apiKEY = 'd7c9302dd5a35a52071fbf6ebab050dc';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`;

    spinner(); // muestra un spinner de carga

    fetch(url).then((respuesta) => {
        return respuesta.json()
    }).then((datos) => {
        limpiarHTML()
        // comprobacion, si la ciudad no existe se usará el siguiente mensjae
        if(datos.cod === '404') {
            imprimirAlerta('Está ciudad no existe', 'error');

            form.reset()
            return;
        };

        mostrarClima(datos)

        form.reset()
        

    });
}

function spinner() {
    limpiarHTML()

    const div = document.createElement('DIV');
    div.classList.add('sk-chase', 'mx-auto')
    div.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    `;

    resultado.appendChild(div)
    
}


function mostrarClima(datos) {
    // Destructuring de un objeto que está adentro de otro objeto
    const {main: {temp, temp_min, temp_max}} = datos;

    const temperaturaACentigrados = parseInt(temp - 273); // ParseInt para que nos de numeros enteros y restado -273 para pasarlo a centigrados
    const temperaturaMINACentigrados = parseInt(temp_min - 273);
    const temperaturaMAXACentigrados = parseInt(temp_max - 273);



    const tempActual = document.createElement('p');
    tempActual.innerHTML = `${temperaturaACentigrados} &#8451`;
    tempActual.classList.add('font-bold', 'text-6xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `
        Temp min: ${temperaturaMINACentigrados} &#8451
    `;
    tempMin.classList.add('text-2xl')

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `
        Temp max: ${temperaturaMAXACentigrados} &#8451
    `;
    tempMin.classList.add('text-2xl')


    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');

    resultadoDiv.appendChild(tempActual)
    resultadoDiv.appendChild(tempMax)
    resultadoDiv.appendChild(tempMin)

    resultado.appendChild(resultadoDiv)
};

function limpiarHTML() {
    resultado.innerHTML = ''
}