// Algunas buenas practicas con if

const prueba = true;

if(prueba) { // Es mejor escribirlo asi ya que prueba === true, es al pedo basicamente.
    console.log('Es verdadero');
}

// Otra cosa importante
// Tambien es necesario escribir de mayor a menor ya que el codigo de if se ejecuta de arriba hacia abajo
// Y una vez se cumple una de las condiciones el codigo deja de ejecutarse

const puntaje = 600;

if(puntaje > 500) {
    console.log('Perfecto!, Obra maestra.')
} else if (puntaje > 400) {
    console.log('Muy bien')
} else if (puntaje > 300) {
    console.log('meh')
} else {
    console.log('siguen intetando')
}

// Hay gente que no le gusta escribir  else if, y solo usan if
// Pero suele pasar que se ejecutan ambos codigos al ser if diferentes
// Por lo tanto se ponen dentro de una función y se pone un return al final de amnbos
// Asi una vez se cumpla una de las dos condiciones entonces el codigo deja de ejecutarse 

const puntaje2 = 700;

function comprobar() {

    // Si no ponemos return, entonces se ejecutaran ambos

    if(puntaje2 > 500) {
        console.log('Excelente, superaste el objetivo')
        return;
    }

    if(puntaje > 400) {
        console.log('Bien!')
        return;
    }

};

comprobar();