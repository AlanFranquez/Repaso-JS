//Variables
const listado = document.querySelector('#gastos ul');
const form = document.querySelector('#agregar-gasto');



// EVENTOS
eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', agregarGasto)

};

// CLASES

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto),
        this.restante = Number(presupuesto)
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        console.log(cantidad.restante)
        console.log(cantidad.presupuesto)

        const total = document.querySelector('#total');
        total.textContent = cantidad.presupuesto

        const restante = document.querySelector('#restante');
        restante.textContent = cantidad.restante
    }


    imprimirAlerta(mensaje, tipo) {
        const div = document.createElement('DIV');
    }
}

// Instanciar UI
const ui = new UI();


let presupuestoPedido;


// FUNCIONES

function preguntarPresupuesto() {
    const pedirPresupuesto = Number(prompt('¿Cuál es tu prespuesto?'));

    // console.log(pedirPresupuesto)

    if(pedirPresupuesto === '' || pedirPresupuesto <= 0 || isNaN(pedirPresupuesto)) {
        window.location.reload();
    }
    

    // Pedimos el presupuesto anteriormente con el prompt y ahora lo asignamos en la clase de Presupuesto
    presupuestoPedido = new Presupuesto(pedirPresupuesto)
    console.log(presupuestoPedido)

    // Para hacer que se vea en el html llamamos a la clase de UI junto a su metodo
    ui.insertarPresupuesto(presupuestoPedido) //presupuestopedido ya que ahí está la cantidad que se pidió;


}

function agregarGasto(e) {
    e.preventDefault();

    const gasto = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    if(gasto === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
    }
}


