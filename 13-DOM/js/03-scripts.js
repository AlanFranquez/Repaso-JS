// Seleccionar un elemento por su id
// GetElementById solo selecciona un elemento, el primero que encuentre.
// Esto es debido a que, se supone, que en html solo debe haber un nombre unico por id


const formulario = document.getElementById('formulario');
console.log(formulario);

// En esteo caso, cuando se selecciona algo que no existe returna null

const ejemplo = document.getElementById('ejeeeee');
console.log(ejemplo) // null