// Queryselector es el seelector que más se utiliza
// Su manera de seleccionar es muy similar a css
// Algo a destacar, queryselector solo selecciona lo primero que encuentre. Para seleccionar más de un elemento -
// Existe el queryselectorAll

// Algunos ejemplos

// Seleccionar una clase
const header = document.querySelector('.header');
console.log(header)

// Seleccionar un id
const unId = document.querySelector('#formulario');
console.log(unId)

// Tambien se puede ser más especifico como en css
const hospedaje = document.querySelector('.card:nth-child(3) .titulo');
console.log(hospedaje)