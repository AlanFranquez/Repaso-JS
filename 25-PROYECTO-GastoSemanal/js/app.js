// variables
const form = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', leerForm)
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante();

        // console.log(this.gastos)
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)

        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => {
            return gasto.id !== id;
        })

        this.calcularRestante();
    }
}

// En UI no habrá constructor ya que solo servirá para imprimir HTML
class UI {
    insertarPresupuesto(cantidad) {

        const { presupuesto, restante } = cantidad;

        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert', 'norepetir');
        divMensaje.textContent = mensaje;

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success')
        }

        const contenidoPrimario = document.querySelector('.contenido');

        const norepetir = document.querySelectorAll('.norepetir');

        if (norepetir.length === 0) {
            contenidoPrimario.insertBefore(divMensaje, form)
        }

        setTimeout(() => {
            divMensaje.remove()
        }, 2000);


    }


    mostrarGastos(gastos) {

        limpiarHTML()

        gastos.forEach((gasto) => {
            const { nombre, cantidad, id } = gasto;

            // Crear un LI
            const li = document.createElement('LI');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            li.setAttribute('data-id', id)

            // Agregar el HTML del gasto
            li.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>
            `;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('BTN')
            btnBorrar.classList.add('btn', 'btn-danger');
            btnBorrar.textContent = 'Eliminar';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }

            li.appendChild(btnBorrar)

            gastoListado.appendChild(li)
        })
    }


    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;

    }

    comprobarPresupuesto(presupuestoOBJ) {
        const {presupuesto, restante} = presupuestoOBJ;

        const divRestante = document.querySelector('.restante');

        // Cambiar al 25% del presupuesto y al 50%
        if((presupuesto / 4) > restante) {
            divRestante.classList.add('alert-danger');
            divRestante.classList.remove('alert-success', 'alert-warning')
        } else if ((presupuesto / 2) > restante) {
            divRestante.classList.add('alert-warning')
            divRestante.classList.remove('alert-sucess')
        } else {
            divRestante.classList.remove('alert-danger', 'alert-warning')
            divRestante.classList.add('alert-success')
        }

        if(restante <= 0) {
            ui.imprimirAlerta('Presupuesto agotado', 'error')


            form.querySelector('button').disabled = true
        }


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


    if (presupuestoUsuario === 0 || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload()
    }


    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)
    // console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto)

}


function leerForm(e) {
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);


    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Por favor rellene ambos campos', 'error');

        return;
    } else if (isNaN(cantidad) || cantidad <= 0) {
        ui.imprimirAlerta('Cantidad no valida', 'error')

        return;
    }

    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }

    // console.log(gasto)

    // Añade un nuvo gasto
    presupuesto.nuevoGasto(gasto)

    ui.imprimirAlerta('Gasto añadido correctamente', 'exito');

    // Imprimir los gastos en el HTML
    const { gastos, restante } = presupuesto

    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto);

    // Reinicio del formulario
    form.reset()
}

function limpiarHTML() {
    gastoListado.innerHTML = ''
}

function eliminarGasto(id) {
    // Elimina los gastos del objetos
    presupuesto.eliminarGasto(id);


    // Elimina los gastos del HTML
    const {gastos, restante} = presupuesto

    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto);
}