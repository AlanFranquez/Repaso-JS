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

    fetch(url).then((respuesta) => {
        return respuesta.json()
    }).then((datos) => {
        // comprobacion, si la ciudad no existe se usará el siguiente mensjae
        if(datos.cod === '404') {
            imprimirAlerta('Está ciudad no existe', 'error');

            form.reset()
            return;
        }

        console.log(datos)

    })
}