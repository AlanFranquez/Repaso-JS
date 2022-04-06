// En scroll se hace en la ventana de window

window.addEventListener('scroll', () => {
    // console.log(window.scrollY) // Muestra los pixeles que se mueve la pantalla

    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // con esto te muestra donde esta un elemento

    if(ubicacion.top < 100) {
        console.log('Estás en la ubicación deseada')
    } else {
        console.log('sigue moviendote')
    }

})