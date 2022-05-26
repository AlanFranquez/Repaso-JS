// CALLBACK, ejemplo de su uso, es basicamente una función que recibe una función como argumento

const listaPaises = ['Uruguay', 'Argentina', 'Brasil', 'Paraguay'];

function mostrarPaises() {
    listaPaises.forEach((pais) => {
        setTimeout(() => {
            console.log(pais)
        }, 1000);
        
    })
}

function agregarNuevoPais(nombre, callback) {
    setTimeout(() => {
        // agregaremos el nuvo pais al final del arreglo
        listaPaises.push(nombre);
        // llamamos el callback ya que es una funcion
        callback();
    }, 3000);
}

mostrarPaises();
agregarNuevoPais('Bolvivia', mostrarPaises)