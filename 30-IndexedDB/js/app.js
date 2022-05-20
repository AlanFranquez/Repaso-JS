// BASE DE DATOS CON JAVASCRIPT, INDEXEDB


document.addEventListener('DOMContentLoaded', () => {
    crm();
});

function crm() {
    // Crear la base de datos
    // Se le pasan dos argumentos, el primero es el nombre y el segundo es la versión de la base de datos 
    let crm = indexedDB.open('Primera base de datos', 1);

    // En caso de que haya un error
    crm.onerror = function() {
        console.log('Hubo un error con la base de datos');
    }

    // En caso de que se haya hecho exitosamente
    crm.onsuccess = function() {
        console.log('La base de datos fue creada correctamente...');
    };

    // Este metodo solo se ejecuta una vez, es como cunado hacmeos una base de datos en sql, lo hacemos solo una vez 
    crm.onupgradeneeded = function() {
        
    }
}