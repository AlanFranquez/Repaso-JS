const cripotomonedasSelec = document.querySelector('#criptomonedas');
const form = document.querySelector('#formulario');

// Crear un promise
const mostrarCriptos = criptomonedas => new Promise((resolve) => {
    resolve(criptomonedas)
})


document.addEventListener('DOMContentLoaded', () => {

    // Rellenar el option
    consultarCriptomonedas();

    form.addEventListener('submit', traerDatos)

});


function consultarCriptomonedas() {
    // Esto nos traerá las 10 más populares
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url).then((respuesta) => {
        return respuesta.json()
    }).then((datos) => {
        return mostrarCriptos(datos.Data)
    }).then((criptomonedas) => {
        optionCriptos(criptomonedas)
    });

}

function optionCriptos(criptomonedas) {
    criptomonedas.forEach((cripto) => {
        // console.log(cripto)
        const {Name, FullName} = cripto.CoinInfo // Para acceder al objeto que está adentro del objeto

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName; // Esto será lo que verá el usuario

        cripotomonedasSelec.appendChild(option)
    })
}

function traerDatos(e) {
    e.preventDefault();

    const moneda = document.querySelector('#moneda').value;
    const criptomonedasInput = document.querySelector('#criptomonedas').value;

    if(moneda === '' || criptomonedasInput === '') {
        imprimirAlerta('Por favor, rellene todos los campos', 'error');
    }
}



function imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('DIV');
    divMensaje.textContent = mensaje;
    divMensaje.classList.add()
}