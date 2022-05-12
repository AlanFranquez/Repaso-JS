// variables
const form = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('click', leerForm)
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []
    }
}

// En UI no habrá constructor ya que solo servirá para imprimir HTML
class UI {
    insertarPresupuesto(cantidad) {
        const total = document.querySelector('#total');
        const restante = document.querySelector('#restante');

        total.textContent = cantidad.presupuesto;
        restante.textContent = cantidad.restante
    }
}

// Instanciando el presupuesto
let presupuesto; 

// Instanciando UI
const ui = new UI();


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

    console.log(presupuestoUsuario)


    if(presupuestoUsuario === 0 || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload()
    }


    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)
    // console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto)

}


function leerForm(e) {
    e.preventDefault();

    const nombre = document.querySelector('#leerForm').value;
    const cantidad = document.querySelector('#cantidad').value;
}