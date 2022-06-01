const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const registroPorPagina = 20;
let totalPaginas;

document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', enviarDatos);

});

function enviarDatos(e) {
    e.preventDefault();

    // Validar
    const busqueda = document.querySelector('#termino').value;
    
    if(busqueda === '') {
        imprimirAlerta('Todos los campos deben estar llenos', 'error');
        form.reset();

        return;
    };

    // imprimir API
    imprimriAPI(busqueda);
};

function imprimirAlerta(mensaje, tipo) {

    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const div = document.createElement('div');
        div.classList.add('rounded', 'max-w-lg', 'mx-auto','px-4', 'py-3', 'mt-5', 'border', 'text-center', 'norepetir');
        div.textContent = mensaje;
    
        if(tipo === 'error') {
            div.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            div.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }
    
        form.appendChild(div);

        setTimeout(() => {
            div.remove()
        }, 2000);
    }

    
};

function imprimriAPI(busqueda) {
    const key = '27793799-e8f8dd15d3eb55a8fb39f6c98';

    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=20`;

    fetch(url).then((respuesta) => {
        // console.log(respuesta)

        return respuesta.json();
    }).then((datos) => {

        totalPaginas = calcularPaginas(datos.totalHits);
        console.log(totalPaginas) 
        mostrarResultado(datos.hits)
    })

}

function mostrarResultado(imagenes) {

    limpiarHTML();

    imagenes.forEach((imagen) => {
        const {pageURL, previewURL, largeImageURL, likes, views} = imagen;

        resultado.innerHTML += `
            <div class="sombreado w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 rounded">
                <div class="bg-white rounded">

                    <img class="imagenes rounded" alt="Imagenes previsualizadas" src="${largeImageURL}">

                    <div class="p-4">
                        <p class="font-bold"> &#9829 Me gustas: <span class="font-light">${likes}</span></p>
                        <p class="font-bold"> &#128065 Visitas: <span class="font-light">${views}</span></p>
                    

                        <a href="${largeImageURL}" class="link" target="_blank" rel="noopener noreferrer">Ver imagen en alta resolución</a>
                    </div>

                </div>
            </div>
        `;     

    })

}

function limpiarHTML() {
    resultado.innerHTML = '';
}

function calcularPaginas(total) {
    // Ceil es para que redonde hacia arriba y puedan crearse las paginas
    return parseInt(Math.ceil(total / registroPorPagina))
}