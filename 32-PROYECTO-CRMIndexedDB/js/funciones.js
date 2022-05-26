// Para conectar la DB se hace lo mismo que al crearla
function conectarDB() {
    const conectarDB = window.indexedDB.open('crm', 1);

    conectarDB.onsuccess = function() {
        console.log('La base de datos se conecto correctamente');
        
        DB = conectarDB.result
    }

    conectarDB.onerror = function() {
        console.log('No se ha conectado la base de datos');
    }
} 

function imprimirAlerta(mensaje, tipo) {

    // Otro metodo para que el cartel no se repita
    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {

        const form = document.querySelector('#formulario')

        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('rounded', 'max-w-lg', 'mx-auto','px-4', 'py-3', 'mt-5', 'border', 'text-center', 'norepetir');
        divMensaje.textContent = mensaje

        if(tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-100', 'text-green-700')
        }

        form.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    



}