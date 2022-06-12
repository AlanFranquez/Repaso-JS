// Como ejecutar multiples await que sean funciones independientes

function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Descargando los nuevos clientes')
        }, 3000);
    })
}


function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Descargando los nuevos pedidos')
        }, 5000);
    })
}



async function app() {
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);

        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app()