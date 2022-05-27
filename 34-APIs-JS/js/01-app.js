const notificarBTN = document.querySelector('#notificar');
// USO DE NOTIFICACIONES EN JAVASCRIPT

// Primero le pedimos permiso al usuario
notificarBTN.addEventListener('click', () => {
    Notification.requestPermission().then((resultado) => {
        console.log(resultado) // Si aceptamos largará granted
    });
});

// Notifiación que se ejecutara una vez obtenido los permisos
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Nueva notificación', {
            // Personalizar notificacion
            body: 'Click aquí para acceder a facebook',
            icon: 'img/ccj.png'
        });

        notificacion.onclick = () => {
            // Esto es para que al clickear se abra un nuvo linkk
            window.open('https://facebook.com')
        }
    }
})