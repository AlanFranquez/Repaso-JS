// Solucionando el callback hell de la segunda parte con promises
const paises = [];

// se escribe de esta forma ya que seria como escribir una función con un argumento pero agregandole una promesa
const nuevoPais = pais => new Promise((resolve) => {
    setTimeout(() => {
        paises.push(pais);
        resolve('Se ha agregado correctamente')
    }, 3000);

});

nuevoPais('China').then((resultado) => {
    console.log(resultado) // recordar que resultado es lo que está entre parentesis del resolve
    console.log(paises)

    // para agregar un nuvo pais
    return nuevoPais('Egipto')
}).then((resultado) => {
    console.log(resultado);
    console.log(paises) 

    return nuevoPais('Mexico')
}).then((resultado) => {
    console.log(resultado);
    console.log(paises) 

})
