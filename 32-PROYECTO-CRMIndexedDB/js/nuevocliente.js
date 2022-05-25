(function() {

    const form = document.querySelector('#formulario');
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        form.addEventListener('submit', validarCliente)
    });

    // Las bases de datos en IndexDb se conectan igual que como se llaman
    function conectarDB() {
        const conectando = window.indexedDB.open('crm', 1);

        // En caso de que la conexión fracase
        conectando.onerror = function() {
            console.log('No se ha podido conectar correctamente');
        };

        // En caso de que la conexión sea exitosa
        conectando.onsuccess = function() {
            DB = conectando.result;
        };

    }
    
    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#nombre').value;

        // Validar el form
        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos deben estar llenos', 'error');

            return;
        };
    }


    function imprimirAlerta(mensaje, tipo) {

        // Otra manera de que no se repita la alerta cada vez que clickeamos
        // Seleccionamos la clase que creamos para no repetir, y usamos un if
        const norepetir = document.querySelector('.norepetir');
        
        if(!norepetir) {
            const divMensaje = document.createElement('DIV');
            divMensaje.textContent = mensaje;
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'mx-auto', 'max-w-lg', 'mt-3', 'text-center', 'border', 'norepetir');
    
    
            if(tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }
    
            form.appendChild(divMensaje);
    
            form.reset();
    
            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }

        
    }
})();