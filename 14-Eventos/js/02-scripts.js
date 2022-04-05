// Eventos del click
// Existen un montón

const nav = document.querySelector('nav');

nav.addEventListener('click', () => {
    console.log('diste click!!!')

    nav.style.backgroundColor = 'blue'
})

nav.addEventListener('mouseenter', () => {
    console.log('el mouse entro')
})

nav.addEventListener('mouseleave', () => {
    console.log('el mouse salió')
})

nav.addEventListener('mousedown', () => {
    console.log('este es similar al click')
})

nav.addEventListener('mouseup', () => {
    console.log('cuando suelto el click')
})

// Para doble click
const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', () => {
    console.log('diste doble click')
})