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
        leerCursos(e);
    }

    // console.log(e.target.classList)
}

function leerCursos(e) {
    const cursos = e.target.parentElement.parentElement;
    // console.log(cursos)

    const infoCursos = {
        imagen: cursos.querySelector('img').src,
        titulo: cursos.querySelector('h4').textContent,
        precio: cursos.querySelector('.precio span').textContent,
        id: cursos.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCursos)
}
