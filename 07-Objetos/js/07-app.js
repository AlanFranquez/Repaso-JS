// El problema principal de los objetos es que contradicen el modelo de "const", porque pese a ser
// nombrados de esta forma, aun así pueden ser modificados.

const auto = {
    nombre: 'Mustang',
    year: 1989,
    precio: 1700,
    disponibilidad: true
}


auto.disponibilidad = false;

auto.precio = 2000;


console.log(auto)

delete auto.year;
console.log(auto)