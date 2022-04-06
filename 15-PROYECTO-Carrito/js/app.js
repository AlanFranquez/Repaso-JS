// Variables
const tbody = document.querySelector('tbody');
const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

losEventos();
function losEventos() {
    listaCursos.addEventListener('click', agregarCarrito)
}

function agregarCarrito(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        console.log('Agregaste al carrito')
    }

    // console.log(e.target.classList)
}