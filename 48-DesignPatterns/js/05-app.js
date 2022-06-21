// Module pattern
// consiste en dividir los archivos de javascript con diferentes import y exports
// tambien se utiliza mucho la funcion IFFIE que ayuda a que los datos queden en esa hoja
// Este es un patron de diseño de organizacion

(function() {
    const nombre = 'Alan';

    console.log(nombre)
})();

// console.log(nombre), tampoco se puede utilizar en otras hojas

// const nuevaFuncion = () => {
//     console.log('Hi')
// };

// export default nuevaFuncion

// Forma sin los modulos, la que se usaba antes de los modulos
const modulo1 = (function() {
    const nombre = 'Alitan';

    function hola() {
        console.log('Hi')
    };


    return {
        nombre,
        hola
    }
})()

// En otra hoja se agregaba esto
// console.log(modulo1.nombre) si querías acceder a esa variable
