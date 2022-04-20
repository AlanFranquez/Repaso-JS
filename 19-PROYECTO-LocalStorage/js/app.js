// Variables
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista-tweets');

let arreglo = [];



// Eventos
document.addEventListener('DOMContentLoaded', () => {
    
    form.addEventListener('submit', formulario)

    // Para que se mantenga en la pagina cuando recargamos (localstorage)
    mantener();


}) 


// funciones
function formulario(e) {
    e.preventDefault();

    const tuits = document.querySelector('#tweet').value;

    
    
    if(tuits === '') {
        mostrarMensaje('POR FAVOR AGREGUE MÁS CARACTERES');

        return
    } 

    // Se hace un objeto, donde se pone una id unica con Date.now()
    // Se asigna tambien los tuits que anteriormente menconamos
    const objTUITS = {
        id: Date.now(),
        tuits: tuits
    }

    // Luego usamos spread opertator en un arreglo vacio, y le agregamos el objeto que creamos anteriormente
    arreglo = [...arreglo, objTUITS]

    mostrarHTML()

    

    
   

    // Una vez enviado, el input quedará en blanco, es el mismo selectr que el de tuits
    const tuit2 = document.querySelector('#tweet');
    tuit2.value = ''


}


// Mensaje de alerta cuando el mensaje sea insuficiente
function mostrarMensaje(mensaje) {
    const div = document.createElement('DIV');
    div.textContent = mensaje
    div.classList.add('alert', 'error', 'norepetir')


    const norepetir = document.querySelectorAll('.norepetir');

    if(norepetir.length === 0) {
        form.appendChild(div);

        setTimeout(() => {
            div.remove()
        }, 3000);
    };


    
}

function mostrarHTML() {

    // limpiamos el html primero para que el codigo no se duplique
    limpiarHTML();

    arreglo.forEach((tw) => {
        const li = document.createElement('LI');
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('borrar-tweet')
        btnEliminar.textContent = 'X';

        li.innerHTML = `
            ${tw.tuits}
        `;

        lista.appendChild(li)
        li.appendChild(btnEliminar)

        // Se hace de esta forma ya que hace que pasarle un argumento
        // tw.id es el id que hicimos antes en date.now
        btnEliminar.onclick = () => {
            borrarTw(tw.id);
        }
    })

    // Función para localStorage
    sincronizarStorage();
}

function limpiarHTML() {
    lista.innerHTML = ''
}

// LocalStorage

function sincronizarStorage() {

    const arregloCambiado = JSON.stringify(arreglo) // lo pasamos a texto, para que local storage lo detecte
    localStorage.setItem('tweet', arregloCambiado)
}

function mantener() {
    // Le agregamos JSON.parse para que nos mande lo de local storage en forma de arreglo a nuestro arreglo

    // el || [] es por si no detecta nada entonces nos enviara un arreglo vació.
    arreglo = JSON.parse(localStorage.getItem('tweet')) || [];

    mostrarHTML();
}

// Así se hace para eliiminar un tuit, citamos el arreglo y con un .filter
function borrarTw(id) {
    // console.log('eliminando.', id)

    arreglo = arreglo.filter((tw) => {
        return tw.id !== id
    })

    mostrarHTML()
}