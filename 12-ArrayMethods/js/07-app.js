const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

// Veremos como unir dos arrays

// Primero con el metodo concat
const union = meses.concat(meses2, meses3, 'String de ejemplo');

console.log(union)

// Ahora con el metodo del spread Operator

const otraUnion = [...meses, ...meses2, ...meses3, 'Otro ejemplo rickito']; 

console.log(otraUnion)

// El orden en que se colocan los arrays determina donde iran, esto es importante saberlo.