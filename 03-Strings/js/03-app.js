// Concatenando strings

const comida = 'Milanesas de pollo';
const postre = 'Flan con dulce de leche';

// Tradicional
console.log(comida + postre);
console.log('Hoy comere ' + comida + 'y el postre será ' + postre);
console.log('Hoy comere ' , comida , 'y el postre será ' , postre);

// Concat

console.log(comida.concat(postre));

// Template String
console.log(`Me gustan las ${comida} y a veces como postre suelo comer ${postre}`);