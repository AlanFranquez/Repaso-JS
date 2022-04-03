const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');


// btn.addEventListener('click', () => {
//     if(footer.classList.contains('activo')) { // contains para verificar si la clase existe
//         footer.classList.remove('activo')
//         btn.classList.remove('activo') // para quitar el boton rojo
//         btn.textContent = 'Idioma y Moneda'
//     } else {
//         footer.classList.add('activo') 
//         btn.classList.add('activo') // para poner el boton rojo
//         btn.textContent = 'X Cerrar'

//     }
// });


// Otro metodo de hacerlo
btn.addEventListener('click', () => {
    footer.classList.toggle('activo')
    btn.classList.toggle('activo')

    if(footer.classList.contains('activo')) {
        btn.textContent = 'X Cerrar';
    } else {
        btn.textContent = 'Idioma y Moneda'
    }
}) 
