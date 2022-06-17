// Explicit Binding

function prueba(elemento1, elemento2) {
    console.log(`Mi nombre es ${this.nombre} y mis generos favoritos de musica son ${elemento1} y ${elemento2}`)
};


const info = {
    nombre: 'Alan'
}


const generosMusica = ['Rock', 'Pop'];

// La diferencia entre call y apply es que apply si soporta los arreglos y trae todo
// mientras que call hay que pasarle la posicion en especifico de lo que queres traer
prueba.call(info, generosMusica[0], generosMusica[1])

prueba.apply(info, generosMusica)

// bind es como un call, funciona similar pero hay que asignarlo a una variable
const fn = prueba.bind(info, generosMusica[0], generosMusica[1]);

fn();