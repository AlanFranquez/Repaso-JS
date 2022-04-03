// Agregar elementos HTML con javascript
const nuevoLink = document.createElement('a');

nuevoLink.textContent = 'Peñarol NOmas'

nuevoLink.href = 'AAAAAAAAAAAAAA.com';

nuevoLink.target = '__blank'

nuevoLink.setAttribute('nuevoatributo', 'aaaa'); // añadir atributo personalizado

nuevoLink.classList.add = 'nueva-clase'

nuevoLink.onclick = funcionNueva


console.log(nuevoLink)

// Para insertar esto en el html hay dos formas
// appendchild que seria para poner un elemento como un hijo
const navegacion = document.querySelector('nav');

navegacion.appendChild(nuevoLink)
// Este metodo lo añade como hijo final

// otra forma de hacerlo
navegacion.insertBefore(nuevoLink, navegacion.children[2])

// función
function funcionNueva() {
    alert('Clickeaste acá')
}

// Crear un card de forma dinamica

const parrafo1 = document.createElement('P');

parrafo1.textContent = 'concierto'
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 =document.createElement('P')

parrafo2.textContent = 'Música electrónica 2021'
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P')

parrafo3.textContent = '$1,200 por persona'
parrafo3.classList.add('precio')

// Crear el div donde estára todo adentro
const div = document.createElement('DIV');

div.classList.add('info');

div.appendChild(parrafo1)
div.appendChild(parrafo2)
div.appendChild(parrafo3)

// Poner la imagen
const card = document.createElement('div')

const imagen = document.createElement('IMG');

imagen.src = 'img/hacer4.jpg'

card.appendChild(imagen);

// agregar el div al card
card.appendChild(div)


// agregar al html

const contenedor = document.querySelector('.contenedor-cards');




// contenedor.appendChild(card)

contenedor.insertBefore(card, contenedor.children[1])