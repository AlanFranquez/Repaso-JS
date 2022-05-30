// FETCH API
const cargarTXTBTN = document.querySelector('#cargarTxt');

cargarTXTBTN.addEventListener('click', cargarFetchAPI);

function cargarFetchAPI() {
    const url = 'data/datos.txt';

    // fetch(link de la api que queremos consultar)
    // Si se cumple entonces se pone un .then con el resultado
    fetch(url).then((resultado) => {
        console.log(resultado)
        console.log(resultado.url)
        console.log(resultado.status) // si dice 200 es porque se cumplio, si dice 404 es porque hubo error
        console.log(resultado.type)

        // Para exprimir los datos generalmente se usan los protos .json() o text();
        // Le ponemos un return con el proto y luego lanzamos un then para visualizar los datos
        return resultado.text()
    }).then((datos) => {
        console.log(datos)
    }).catch((error) => {
        console.log(error) // Es importante poner un catch debido a que si nos da error nos tire algún aviso
    })
}