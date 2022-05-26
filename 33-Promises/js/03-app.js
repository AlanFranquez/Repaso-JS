// PROMESAS
// LAS PROMESAS TIENEN DOS FORMAS EL REJECT Y EL RESOLVE, EL PRIMERO ES PARA CUNADO SE ACIERTA Y EL SEGUNDO CUANDO HAY ERROR

const promesas = new Promise((resolve, reject) => {
    const dato = false;

    if(dato) {
        resolve('El dato es verdadero');
    } else {
        reject('El dato es falso :P');
    }
});

// Para poder imprimir en pantalla los datos utilizamos .then (se ejecutara en caso de que caiga en el resolve)
// Y .catch ( que se ejecutará en caso de que caiga en el reject );

// Se le pasa un parametro que nos da el resultado
promesas.then((resultado) => {
    console.log(resultado)
})
.catch((resultado) => {
    console.log(resultado)
})



// EN .THEN TAMBIEN SE PUEDE PASAR FUNCIONES, HARE UN EJEMPLO
const segundaPromesa = new Promise((resolve, reject) => {
    const suma = 2 + 2;


    if(suma === 4) {
        resolve('El resultado es correcto')
    } else {
        reject('El resultado es falso')
    }
})

// Recordar resolve => then === el argumento de then es el resolve, lo mismo con el catch y reject
// Reject => catch

segundaPromesa.then((resultado) => {
    funcionpruebita('Resultado correcto');
}).catch((resultado) => {
    console.log(resultado)
})


function funcionpruebita(msj) {
    console.log(msj)
}

// Reject para cuando la promesa no sé cumple
// Resolve para cuando la promesa si se cumple

// ESTADOS DEL PROMSIE
// Fulfill - CUANDO SE CUMPLE
// Reject - cuando no se cumple
// Pending - cuando no se le ha agregado nada