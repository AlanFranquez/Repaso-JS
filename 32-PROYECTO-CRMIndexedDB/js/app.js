// Usaremos una funcion IFI, estas funciones permiten que el codigo no quede en la ventana global, sino más bien solo en este archivo
(function() {

    let DB;


    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });


    function crearDB() {
        // Creamos la base de datos
        const crearDB = window.indexedDB.open('crm', 1);

        // Si no lo soporta el navegador
        crearDB.onerror = function() {
            console.log('No se ha podido crear la base de datos :/')
        };

        // Si se crea con exito
        crearDB.onsuccess = function() {
            console.log('Se ha creado correctamente :D');

            DB = crearDB.result;
        };

        // Función que se ejecuta una sola vez, acá es donde asignamos el argumento
        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            // CreateObjectStore, importante
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('correo', 'correo', {unique: false});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});

            console.log('DB CREADA')
        }



    }

}())