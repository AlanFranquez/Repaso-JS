// BASE DE DATOS CON JAVASCRIPT, INDEXEDB
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();


    setTimeout(() => {
        crearCliente()
    }, 5000);
});

function crmDB() {
    // Crear la base de datos
    // Se le pasan dos argumentos, el primero es el nombre y el segundo es la versión de la base de datos 
    let crm = window.indexedDB.open('Primera base de datos', 1);

    // En caso de que haya un error, onerror sirve para esto
    crm.onerror = function() {
        console.log('Hubo un error con la base de datos');
    }

    // En caso de que se haya hecho exitosamente, onsuccess sirve para eso
    crm.onsuccess = function() {
        console.log('La base de datos fue creada correctamente...');

        DB = crm.result
    };

    // Este metodo solo se ejecuta una vez, es como cunado hacmeos una base de datos en sql, lo hacemos solo una vez 
    crm.onupgradeneeded = function(e) {
        // console.log(e.target.result)
        const db = e.target.result;

        // Creación del objectStore, nos permite crear las columnas
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        // El primer valor le asigna el nombre a los desplegables y el segundo al keypath
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
    }
}

// Transacción es la revisión de pasos y cumplimientos de los mismos para realizar una acción
// Ejemplo todo el proceso que se hace en un cajero automatico para dar dinero
function crearCliente() {
    // Primer argumento donde será la transacción, segundo: el metodo
    let transaction = DB.transaction(['crm'], 'readwrite');
    
    // Por si la transacción se hace bien
    transaction.oncomplete = function() {
        console.log('Transacción completada')
    }

    // Por si ocurre un error
    transaction.onerror = function() {
        console.log('Hubo un error en la transacción')
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        nombre: 'Alan',
        telefono: 320983290,
        email: 'correooo@correo.com'
    }

    // Está es la forma con la que se añaden datos a la base de datos
    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}