// Prototype, todo hecho con eso

function Seguro(marca, year, tipo) {
    this.marca = marca,
    this.year = year,
    this.tipo = tipo
}


function UI() {}


UI.prototype.rellenarYears = function() {
    const max = new Date().getFullYear(); // Año actual
    const min = max - 20;

    const selecYear = document.querySelector('#year');

    for(let i = max; i >= min; i--) {
        let selecc = document.createElement('option');
        selecc.value = i;
        selecc.innerHTML = i;

        
        selecYear.appendChild(selecc);

    }
}

// asignar el valor
const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
    ui.rellenarYears()
})


// Validar formulario, para selectores no se usa el prototype
const form = document.querySelector('#cotizar-seguro');
form.addEventListener('submit', validarForm)

function validarForm(e) {
    e.preventDefault();
    
    const marca = document.querySelector('#marca');
    const year = document.querySelector('#year');
    const tipo = document.querySelector('input[name="tipo"]:checked');
    

    if(marca.value === '' || year.value === '' || tipo.value === '') {
        ui.mostrarAlertaNegativa('Por favor complete todos los campos para continuar');

        return; // se pausara el codigo acá si es que no se rellenan los campos
    } 

    // Mensaje que aparecerá si todos los campos están rellenos
    ui.mostrarAlertaPositiva('Enviando...')
}

//Prototype para validar el formulario
UI.prototype.mostrarAlertaNegativa = function(mensaje) {
    const div = document.createElement('DIV');
    div.textContent = mensaje;
    div.classList.add('alerta', 'error', 'mensaje', 'noRepetir', 'mt-10');
    
    const noRepetir = document.querySelectorAll('.noRepetir');
    if(noRepetir.length === 0) {
        const resultado = document.querySelector('#resultado')
        form.insertBefore(div, resultado)
        
        setTimeout(() => {
            div.remove()
        }, 2000);
        
    }
    
}

UI.prototype.mostrarAlertaPositiva = function(mensaje) {
    const div = document.createElement('DIV');
    div.textContent = mensaje;
    div.classList.add('correcto', 'mensaje', 'noRepetir');
    
    
    const noRepetir = document.querySelectorAll('.noRepetir');
    if(noRepetir.length === 0) {
        const spinner = document.querySelector('#cargando');
        spinner.style.display = 'flex';

        const resultado = document.querySelector('#resultado')
        form.insertBefore(div, resultado)

        setTimeout(() => {
            spinner.style.display = 'none'

            div.remove()
        }, 2000);
        
    }
}