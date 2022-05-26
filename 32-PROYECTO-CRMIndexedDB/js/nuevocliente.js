

(function() {

    let DB;

    // Form
    const form = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        form.addEventListener('submit', validarForm);
    });


    function validarForm(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;


        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos deben ser llenados', 'error')

            return;
        }

        // Le asignamos los valores a un objeto
        const cliente = {  
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,
            id: Date.now() // Generar id

        }

        // console.log(cliente)

        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(cliente) {
        // Transaction
        const transaction = DB.transaction(['crm'], 'readwrite');

        // Hacemos un objectStore y le agregamos el cliente
        const objectStore = transaction.objectStore('crm');

        // Agregar cliente
        objectStore.add(cliente)

        transaction.onerror = function(){
            console.log('No pudo ejecutarse el comando')
        }


        // oncomplete en caso de que sea exitoso
        transaction.oncomplete = function() {
            console.log('Validado')
            imprimirAlerta('El cliente se agregó correctamente', 'exito');


            // Ahora redigirgmos al usuario hacia la tabla
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    }


    
})();

