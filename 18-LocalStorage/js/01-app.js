// LocalStorage, para almacenar cosas en el navegador
// Solo almacena strings, sin embargo...
// Se pueden almacenar objetos/arrays y un sin fin más convirtiendolos en string

// Estructura, primero la llave y luego el valor
localStorage.setItem('nombre', 'Alan')

// JSON stringy convierte cualquier cosa a string
// Y luego lo guardaremos en el localstorage
const nombreCompleto = ['Alan', 'Santiago', 'Fránquez', 'Esperben'];
const nombreCompletString = JSON.stringify(nombreCompleto)

localStorage.setItem('array', nombreCompletString );

// Ahora probemos esto mismo pero con un objeto

const onePiece = {
    genero: 'Aventura',
    episodios: '1000',
    arcos: '10'
}

const onePieceString = JSON.stringify(onePiece);

localStorage.setItem('one piece', onePieceString)