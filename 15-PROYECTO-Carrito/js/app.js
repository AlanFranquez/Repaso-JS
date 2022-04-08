// Variables
const tbody = document.querySelector('tbody');
const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

let arregloCarrito = [];

losEventos();
function losEventos() {
    listaCursos.addEventListener('click', agregarCarrito)
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

    arregloCarrito = [...arregloCarrito, infoCursos];

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
                <img src="${producto.imagen}">
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
        `;

        tbody.appendChild(fila)
    })

}


function limparHTML() {
    tbody.innerHTML = ''
}