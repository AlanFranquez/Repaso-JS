function probar() {

    return new Promise((resolve, reject) => {
        const error = false;


        setTimeout(() => {
            if(!error) {
                resolve('No hay ningún error')
            } else {
                reject('Hay un error en la consola')
            }
        }, 3000);
       
    })
}

// El async await siempre se asigna en una variable
// el async va en la función padre y el await en la variable donde esta la función hija

async function probarAsync() {
    try {
        console.log(1+1);

        const resultado = await probar();
        console.log(resultado)

        console.log(2+2)

    } catch (error) {
        console.log(error) // Acá cae el reject
    }
}

probarAsync()