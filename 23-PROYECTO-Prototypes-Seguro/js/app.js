// Prototype, todo hecho con eso

function Seguro(marca, year, tipo) {
    this.marca = marca,
    this.year = year,
    this.tipo = tipo
}

Seguro.prototype.cotizacion = function() {
    console.log(this.marca)

    // Valor
    /*
        Americano: 1.15
        Asiatico: 1.05
        Europeo: 1.5

    */
    let cantidad;
    const valor = 6000;

    switch (this.marca) {
        case '1':
            cantidad = valor * 1.15
        break;

        case '2':
            cantidad = valor * 1.05
        break;

        case '1':
            cantidad = valor * 1.5
        break;
    
        default:
            break;
    }

    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    // Si el seguro es basico se multiplica por un 30%
    // Si el seguro es completo entonces se multiplica por un 60%

    if(this.tipo === 'basico') {
        cantidad *= 1.30
    } else {
        cantidad *= 1.60
    }

    return cantidad
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

    // Instanciar la cotización
    const seguro = new Seguro(marca.value, year.value, tipo.value);
    seguro.cotizacion()
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
