const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);

    callback();
}

function mostrarPaises() {
    console.log(paises)
}

// Esto es un ejemplo de callback hell
function inciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Perú', mostrarPaises)

        setTimeout(() => {
            nuevoPais('Venezuela', mostrarPaises)

            setTimeout(() => {
                nuevoPais('Guayanas', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

inciarCallBackHell()


