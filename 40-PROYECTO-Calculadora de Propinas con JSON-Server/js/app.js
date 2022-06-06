let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

// Para poder decir segun el numero de la categoria que clase de comida es
const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const contenido = document.querySelector('.contenido')

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;


    // Validar
    if(mesa === '' || hora === '') {
        imprimirAlerta('Todos los campos son obligatorios');

        return;
    }

    // Esto no se puede hacer ya que es un objeto, no un arreglo
    // let objCliente = {
    //     mesa: mesa,
    //     hora: hora,
    //     pedido: Date.now()
    // };

    // cliente = [...cliente, objCliente];
    // console.log(cliente)

    // Asignar datos del formulario a cliente
    // El spread operator es para que el pedido no se pierda
    cliente = {
        ...cliente, 
        mesa: mesa, 
        hora: hora
    }
    console.log(cliente)

    // Ocultar form
    const modalForm = document.querySelector('#formulario');
    const modalBoostrap = bootstrap.Modal.getInstance(modalForm);
    modalBoostrap.hide();


    //Mostrar las secciones
    mostrarSecciones();

    // LLAMAR API
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) =>  {
        seccion.classList.remove('d-none')
    })
}


function imprimirAlerta(mensaje) {
    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const alerta = document.createElement('DIV');
        alerta.classList.add('d-block', 'invalid-feedback', 'text-center', 'norepetir');
        alerta.textContent = mensaje;
    
        const form = document.querySelector('form');
        form.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }

    
}

// json-server --watch db.json --port 4000  para asignarla al puerto 4000
function obtenerPlatillos() {
    const url = `http://localhost:4000/platillos`;

    fetch(url).then((resultado) => {
        return resultado.json()
    }).then((datos) => {
        mostrarHTML(datos)
    })
};

function mostrarHTML(datos) {
    

    datos.forEach((dato) => {
        const row = document.createElement('div')
        row.classList.add('row', 'py-3', 'border-top');

        const comida = document.createElement('div');
        comida.classList.add('col-md-4');
        comida.textContent = dato.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.innerHTML = `$${dato.precio}` 


        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        // Para poder decir segun el numero de la categoria que clase de comida es
        categoria.textContent = categorias[dato.categoria]

        // Input para saber la cantidad que pidió
        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0; // El minimo que se puede pedir
        inputCantidad.id = `producto-${dato.id}`;
        inputCantidad.classList.add('form-control');
        inputCantidad.value = 0

        // Función que detecta la cantidad y el platillo que se está agregando
        // No se puede usar addeventlistener cuando el elemento se crea en javascript
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...dato, cantidad})
        };

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad)

        row.appendChild(comida)
        row.appendChild(precio)
        row.appendChild(categoria)
        row.appendChild(agregar)
        contenido.appendChild(row)
               
    })
}

function agregarPlatillo(producto) {
    console.log(producto)
}