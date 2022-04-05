// eventos en el input

const buscar = document.querySelector('.busqueda');


// Cuando se presiona una tecla
// buscar.addEventListener('keydown', () => {
//     console.log('escribiendo...')
// })

// // Cuando se deja de presionar una tecla
// buscar.addEventListener('keyup', () => {
//     console.log('escribiendo...!')
// })

// // Blur, se llama cuando se da click por fuera
// buscar.addEventListener('blur', () => {
//     console.log('AAAAAAAAAA...')
// })

// // Copy, texto que se copia
// buscar.addEventListener('copy', () => {
//     console.log('copiar')
// })

// // Paste, pegar texto, tambien existe cut de cortar
// buscar.addEventListener('paste', () => {
//     console.log('pegar')
// })


// Input, hace todos los anteriores menos el blur
// buscar.addEventListener('input', () => {
//     console.log('input input')
// })

// se le puede pasar un argumento al input, para determinar lo que el usuario escribe

buscar.addEventListener('input', (e) => {
    if(e.target.value === 'Galletitas') {
        console.log('El usuario buscó galletitas')
    }

    console.log(e.target.value) // Para saber lo que el usuario escribe
})

