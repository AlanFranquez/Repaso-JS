// Avisarle al usuarió si está conectado o no

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Si estás conectado')
    } else {
        console.log('No estás conectado')
    }
}