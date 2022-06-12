const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// con promesas se hacía de esta forma

// function obtenerDatos() {
//     fetch(url).then((respuesta) => {
//         return respuesta.json()
//     }).then((datos) => {
//         console.log(datos)
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// hacer lo mismo pero con async await
async function obtenerDatos() {
    // const respuesta = await fetch(url);
    // const resultado = await respuesta.json();

    // console.log(resultado)

    // Para poder utilizar el catch podemos poner un try catch
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}