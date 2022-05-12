//Variables
const listado = document.querySelector('#gastos ul');
const form = document.querySelector('#agregar-gasto');



// EVENTOS
eventListeners();
function eventListeners() {

    // document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', agregarGasto)

};

// CLASES

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto),
        this.restante = Number(presupuesto),
        this.gastos = []
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]

        console.log(this.gastos)
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

        div.textContent = mensaje;
        div.classList.add('text-center', 'alert', 'mt-2', 'norepetir')

        if(tipo === 'error') {
            div.classList.add('alert-danger')
        } else {
            div.classList.add('alert-success')
        }

        
        const h2 = document.querySelector('h2');

        const norepetir = document.querySelectorAll('.norepetir');
        if(norepetir.length === 0) {
            h2.appendChild(div)

            setTimeout(() => {
                div.remove()
            }, 2000);
        }
        

    }
}

// Instanciar UI
const ui = new UI();


let presupuestoPedido;


// FUNCIONES
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

    


function agregarGasto(e) {

    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')


        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error')

        return
    } 


    // console.log('Añadiendo gastos')

    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }

    presupuestoPedido.nuevoGasto(gasto)

    
}


