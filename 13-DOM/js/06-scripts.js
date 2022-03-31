// Cambiar el encabezado con javascript

const h1 = document.querySelector('h1');

h1.textContent = 'Cambie el titulo pa, qué vas a hacer al respecto?'; // SI se pone visibility: hidden en css, si lo encontrara

h1.innerText = ' Volvi a cambiarlo maestro claro';// SI se pone visibility: hidden en css, no lo encontrara

h1.innerHTML = `JAJaj` // innerhtml es que se trae el html



// Un ejercicio, permitir que el usuario ponga el mismo el titulo

const h2 = document.querySelector('h2');

const consultar = prompt('Ponele vos el titulo pibe')

h2.textContent = consultar

// Ejercicio, vamos a cambiar una imagen
const img = document.querySelector('.card:nth-child(3) img');
console.log(img)

img.src = 'img/newyork4.jpg' // Accedo al atributo src y cambio la imagen.