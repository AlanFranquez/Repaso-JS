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
    // Destructuring del pedido
    let {pedido} = cliente;
    
    if(producto.cantidad > 0) {

        // comprobar si el elemento ya existe, asi se aumenta la cantidad
        if(pedido.some((articulo) => {
            return articulo.id === producto.id
        })) {
            // El articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map((articulo) => {
                if(articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }

                return articulo;
            });

            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            // El articulo no existe, lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto]
        }
        
    } else {
        //  Eliminar elementos cuando la cnatidad es 0
        const resultado = pedido.filter((articulo) => {
            return articulo.id !== producto.id;
        });

        cliente.pedido = [...resultado]
    }

    // Limpiar el codigo HTML PREVIO
    limpiarHTML()

    // Mostrar el resumen
    actualizarResumen()
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');
    
    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Iterar sobre el array de pedido
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach((articulo) => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEL = document.createElement('h4');
        nombreEL.classList.add('my-4');
        nombreEL.textContent = nombre;

        // Cantidad del articulo
        const cantidadEL = document.createElement('p');
        cantidadEL.classList.add('fw-bold');
        cantidadEL.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        // Precio del articulo
        const precioEL = document.createElement('p');
        precioEL.classList.add('fw-bold');
        precioEL.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;

        //Agregar valores a sus contenedores
        cantidadEL.appendChild(cantidadValor);
        precioEL.appendChild(precioValor);


        // Agregar elementos al LI
        lista.appendChild(nombreEL);
        lista.appendChild(cantidadEL)
        lista.appendChild(precioEL)


        // Agregar lista al gruop principal
        grupo.appendChild(lista);
    })


    // Titulo de la sección
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center')


    resumen.appendChild(mesa)
    resumen.appendChild(hora)
    resumen.appendChild(heading)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    contenido.innerHTML = ''
}