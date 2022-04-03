// Traversing 
// Children -- > Para acceder a las hijos 
// FirstElementChild 
// LastElementChild
// ParenElement -- > Para acceder a los padres
// NexElementSiblings --> Acceder al siguiente elemento hermano
// previousElementSiblings -- > Acceder al hermano anterior

const nav = document.querySelector('nav');

console.log(nav.childNodes) // tambien cuenta los espacios, una cagada
console.log(nav.children)  // cuenta los hijos sin los espacios
console.log(nav.firstElementChild) // Acceder al primer hijo
console.log(nav.lastElementChild) // Acceder al ultimo hijo

// Como acceder al primer hijo del nav?
console.log(nav.children[0])


console.log(nav.children[0].nodeType) // tipo de elemento
console.log(nav.children[0].nodeName) // nombre de la etiqueta




const card = document.querySelector('.card');
console.log(card)

// Intentar acceder al titulo con traversing the dom
console.log(card.children[1].children[1].textContent)

// Supongamos que quiero cambiar la imagen, con traversing the dom
console.log(card.children[0].src);

card.children[0].src = 'img/arriba.jpg'

// Acceder del hijo al padre, parentNode y parentElement

console.log(card.parentElement.parentElement) // Siempre se puede ir subiendo, siempre y cuando haya un padre al que ir

// Acceder a los hermanos
console.log(card.nextElementSibling.nextElementSibling) // Acceder al siguiente hermano

// Acceder al hermano previo, un ejemplo
const ultimoCard = document.querySelector('.card:nth-child(3)');
console.log(ultimoCard)
console.log(ultimoCard.previousElementSibling)




