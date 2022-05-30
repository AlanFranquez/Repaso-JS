// FETCH APIcon un JSON
const cargarJSONBTN = document.querySelector('#cargarJSON');

cargarJSONBTN.addEventListener('click', cargarFETCHAPI);


function cargarFETCHAPI() {
    const url = 'data/empleado.json';

    fetch(url).then((resultado) => {
        return resultado.json();
    }).then((datos) => {
        // console.log(datos)
        mostrarHTML(datos)
    }).catch((error) => {
        console.log(error)
    })
};

// Le aplicamos destructuring para sacar los datos 
function mostrarHTML({nombre, empresa, trabajo}) {

    const div = document.querySelector('.insertar-datos');

    div.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;

}