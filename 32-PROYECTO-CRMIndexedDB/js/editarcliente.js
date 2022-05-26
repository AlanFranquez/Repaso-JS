(function() {

    let DB;

    // Verificar el id
    const parametrosURL = new URLSearchParams(window.location.search);

    let idCliente = parametrosURL.get('id');

    // Selectores
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario')




    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        

        // Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente)

        

        if(idCliente) {
            
            // Demora un poco ya que la base de datos demora en crearse y tira error
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 100);
            
        }
    });

    function actualizarCliente(e) {
        e.preventDefault();

        if(nombreInput.value === '' || telefonoInput.value === '' || emailInput.value === '' || empresaInput.value === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error')
            return;
        }

        const clienteActualizado = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        console.log(clienteActualizado)

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        // Para editar
        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            // console.log('Cliente editadó correctamente');

            imprimirAlerta('Se editó correctamente', 'exito')

            // Que lo redirgia hacia la tabla de clientes
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        };
        
        transaction.onerror = function() {
            imprimirAlerta('Ha habido un error', 'error')
        }


    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');


        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {
                
                if(cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                };

                cursor.continue();
        
            }
        }
    };

    function llenarFormulario(datosCliente) {
        const {nombre, telefono, email, id, empresa} = datosCliente;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error')
        };

        abrirConexion.onsuccess = function() {
            console.log('Se abrió correctamente')
            DB = abrirConexion.result;
        }
    }

})();