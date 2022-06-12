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

// Function expressión, donde iría el async?
// Iria antes del arrow function

const probarAsync = async() => {
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