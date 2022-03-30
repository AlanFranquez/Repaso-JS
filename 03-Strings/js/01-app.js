const prueba = 'String normal';
const prueba2 = String('String con el atributo string');
const prueba3 = new String('Nuevo string, new String');

console.log(prueba3[0]);
console.log(prueba.includes('S'))

if(prueba.includes('S') === true) {
    console.log('Incluye la letra "s"');
} else {
    console.log('No la inlcuye :(')
}


const variable = prompt();

document.write(variable.toUpperCase())