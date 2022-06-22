//Namespaces
// Organizacion de codigo
// crear un objeto global alrededor de la aplicacion y color todas las funciones detnro


const restaurante = {}


restaurante.platillos = [
    {
        platillo: 'pizza',
        precio: 25
    },
    {
        platillo: 'pancho',
        precio: 30
    },
    {
        platillo: 'milanesas',
        precio: 30
    }
];

restaurante.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Benvenido a nuestro menú')

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
        })
    },

    ordenar: (id) => {
        console.log(`Tu platillo: ${restaurante.platillos[id].platillo} se está preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurante.platillos.push(nuevo)
    }
};


restaurante.funciones.ordenar(1)
restaurante.funciones.agregarPlatillo('taco', 20)


const {platillos} = restaurante;
restaurante.funciones.mostrarMenu(platillos);




console.log(restaurante)