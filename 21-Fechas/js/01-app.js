// Metodo fechas Date
const fecha = new Date(); // Podemos agregar valores de fecha entre los parentesis, por ejemplo si pongo 08-12-2001, sabre en que día nací
// console.log(fecha)

let valor;

valor = fecha.getFullYear(); // año
valor = fecha.getMonth(); // enero = 0, febrero = 1, etc
valor = fecha.getDate(); // fecha actual
valor = fecha.getMinutes(); // minutos
valor = fecha.getHours() // hora
valor = fecha.setFullYear(2011)



// date.now es el unico que no requiere un new adelante

console.log(valor)