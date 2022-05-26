// Funcion IFIE para que todo se quede en está ventana
(function () {
    let DB;

    const tbody = document.querySelector('#listado-clientes')

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if(window.indexedDB.open('crm', 1)) {
            imprimirClientes();
        }

        tbody.addEventListener('click', eliminarRegistro);
    });

    function eliminarRegistro(e) {
        e.preventDefault()

        // Usaremos delegation para poder acceder al botón de eliminar
        if(e.target.classList.contains('eliminar')) {
            // el dataset.cliente para acceder al data-cliente
            const idEliminar = Number(e.target.dataset.cliente);
            console.log(idEliminar)

            const confirmar = confirm('¿Deseas eliminar este cliente?');
            if(confirmar) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');
    
                objectStore.delete(idEliminar);
    
                transaction.oncomplete = function() {
                    console.log('Se ha completado exitosamente');

                    e.target.parentElement.parentElement.remove()
                }

                transaction.onerror = function() {
                    console.log('No se ha podidod ejecutar');
                }
            }

            
        }
    }

    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        // Ahora se provee que pasaría si se ejecuta correctamente o no, y luego la función que se ejecuta una vez
        crearDB.onerror = function() {
            console.log('No se ha podido crear con exito la base de datos')
        }

        crearDB.onsuccess = function() {
            console.log('Se creo correctamente')

            DB = crearDB.result;
            
        }

        // A esta siempre se le pasa un argumetno
        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('nombre', 'nombre', {unique: false})
            objectStore.createIndex('email', 'email', {unique: true})
            objectStore.createIndex('telefono', 'telefono', {unique: false})
            objectStore.createIndex('empresa', 'empresa', {unique: false})
            objectStore.createIndex('id', 'id', {unique: true})

            console.log('Base de datos creada')
        }
    }

    function imprimirClientes() {

        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error')
        };

        abrirConexion.onsuccess = function() {
            console.log('Se abrió correctamente')
            DB = abrirConexion.result;


            limpiarHTML();

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;
                // console.log(cursor)

                if(cursor) {
                    const {nombre, empresa, telefono, id, email} = cursor.value;

                    const tr = document.createElement('tr');
                         tr.innerHTML = `
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                    <p class="text-gray-700">${telefono}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                    <p class="text-gray-600">${empresa}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                                </td>
                        `;
    
                    tbody.appendChild(tr);
    
                    cursor.continue();
                } else {
                    console.log('no se ha detectado ningun cursor')
                }
                

        }
        }
 
        
    }


    function limpiarHTML() {
        tbody.innerHTML = ''
    }

   

})();