// Visibility state
// Este generalmente se usa para que cuando los usuarios dejen de mirar un video, el mismo deje de reproducirse

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('ejecutar la función para reproducir el video')
    } else {
        console.log('Pausar el video')
    }
})