// Como crear Booleanos, son dos tipos

const boolean = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean);
console.log(boolean2);
console.log( typeof boolean2);

console.log(boolean == boolean3); // Acá los booleanos no se comportan como los numeros


// Otro metodo para crear booleanos
const booleanoObjeto = new Boolean(true);
console.log(booleanoObjeto);
console.log(typeof booleanoObjeto); // lo muestra como un objeto