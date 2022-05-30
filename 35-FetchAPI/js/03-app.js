// FETCH API CON ARRAYS
const cargarJSONArrayBTN = document.querySelector('#cargarJSONArray');

cargarJSONArrayBTN.addEventListener('click', obtenerDatosFETCH);

// Si queremos que los datos se ejecuten una vez cargado el documento lo que se puede hacer es lo siguiente
// document.addEventListener('DOMContentLoaded', obtenerDatosFETCH)

function obtenerDatosFETCH() {
    const url = 'data/empleados.json';
    
    fetch(url).then((resultado) => {
        return resultado.json()
    }).then((datos) => {
        mostrarHTML(datos)
    })

};

// Asi se muestran los datos de un arreglo de json
function mostrarHTML(datos) {
    const div = document.querySelector('.insertar-datos');

    let html = '';

    datos.forEach((empleado) => {
        const {nombre, empresa, trabajo} = empleado

        html += `
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    div.innerHTML = html

    /*
    TAMBIEN SE PUEDE HACER DE LA SIGUIENTE FORMA
    const div = document.querySelector('.insertar-datos');

    const div2 = document.createElement('DIV');

    datos.forEach((empleado) => {
        const {nombre, empresa, trabajo} = empleado

        div2.innerHTML += `
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    div.appendChild(div2)

    */
}
