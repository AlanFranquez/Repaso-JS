// Destructuring de Arrays
// Es un poco diferente a los destructuring que se hacían con los objetos, por ejemplo así era en arreglos

const producto = {
    nombre: 'Alan',
    edad: 20,
    codigo: 12345678
}

const {nombre} = producto;
console.log(nombre);

// Pero con los destructuring de Array es diferente...
// Se evalua la posición, no la llave, ya que en los arrays no hay llaves

const numeros = [10,20,30,40,50];

const [primero] = numeros; // Me entregará el numero 10 ya que es la primera posición

console.log(primero);

// Si quisiera obtener el 40, sin almacenar otras variables se hace lo siguiente
const [, , , cuarto] = numeros; // 40;

console.log(cuarto);


// Supongamos que queremos sacar el segundo y luego el resto de los que siguen pero sin nombrarlos uno por uno
// Hariamos lo siguiente

const [, segundo, ...resto] = numeros;
console.log(segundo) // me daría el 20
console.log(resto) // me daría el resto de numeros que le siguen