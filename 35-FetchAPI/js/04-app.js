// CONSUMIR UNA API LOCAL
const cargarAPI = document.querySelector('#cargarAPI');

cargarAPI.addEventListener('click', cargarFETCHAPI);

function cargarFETCHAPI() {
    const url = 'https://picsum.photos/list';

    fetch(url).then((respuesta) => {
        return respuesta.json();
    }).then((datos) => {
        mostrarHTML(datos)
    })
};

function mostrarHTML(datos) {
    const div = document.querySelector('#insertar-datos');

    let html = '';

    datos.forEach((dato) => {

        const {author, post_url, format} = dato;

        html += `
            <a href="${post_url}" target="_blank">VER IMAGEN</a>
            <p>Formato de la imagen: ${format}</p>
            <p>Autor de la imagen: ${author}</p>
        `;

    });

    div.innerHTML = html
}