// Variables
const tbody = document.querySelector('tbody');
const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

let arregloCarrito = [];

losEventos();
function losEventos() {
    listaCursos.addEventListener('click', agregarCarrito);

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarrito.addEventListener('click', vaciarCarro)
}

function vaciarCarro() {
    arregloCarrito = [];

    // Limpiuar html para que desaparezca todo en el html
    limparHTML();
}

function agregarCarrito(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        leerCursos(e);
    }

    // console.log(e.target.classList)
}

function leerCursos(e) {

    // selección de cursos
    const cursos = e.target.parentElement.parentElement;
    // console.log(cursos)

    // identificación y selección de cada parte del curso
    const infoCursos = {
        imagen: cursos.querySelector('img').src,
        titulo: cursos.querySelector('h4').textContent,
        precio: cursos.querySelector('.precio span').textContent,
        id: cursos.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // esto es para que el programa detecete si un curso está agregado más de una vez
    const existe = arregloCarrito.some((curso) => {
        return curso.id === infoCursos.id
    })

  

    if(existe) {
        // Se actualiza el numero de cantidad
        const cursos = arregloCarrito.map((curso) => {
            if(curso.id === infoCursos.id) {
                curso.cantidad++;
                return curso
            } else {
                return curso
            }
        });

        arregloCarrito = [...cursos]
    } else {
        // Se añade el curso
        arregloCarrito = [...arregloCarrito, infoCursos];
    }

    console.log(arregloCarrito)


    carritoHTML();

}


function carritoHTML() {

    //Limpiar HTMl
    limparHTML()

    // ForEach que recorra y genere el arreglo html
    arregloCarrito.forEach((producto)=> {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>
                ${producto.titulo}
            </td>

            <td>
                ${producto.precio}
            </td>

            <td>
                ${producto.cantidad}
            </td>

            <td>
                <a href="#" class="borrar-curso" data-id="${producto.id}">X</>
            </td>
        `;

        tbody.appendChild(fila)
    })

}


function limparHTML() {
    tbody.innerHTML = ''
}

// ELiminar curso
function eliminarCurso(e) {
    // Comprobaremos la clase para poder eliminar solo cuando clicke en el elemento 
    // console.log(e.target.classList)

    if(e.target.classList.contains('borrar-curso')) {
        // necesitamos obtener la id del curso+
        // console.log(e.target.getAttribute('data-id'))
        const cursoId = e.target.getAttribute('data-id');

        arregloCarrito = arregloCarrito.filter((curso) => {
            return cursoId !== curso.id
        })

        carritoHTML();
    }
}