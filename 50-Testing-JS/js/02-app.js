// Un pequeño framework de testing basico
// con javscript vanila

function suma(a,b) {
    return a+b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(25, 25);
let esperado = 30;

expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)

resultado = restar(30, 30);
esperado = 0;

// Expected: resultado esperado
// To be lo que vamos a testear
expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)


function expected(esperado) {
    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.error('El resultado fue inesperado')
            } else {
                console.log('El resultado fue el esperado')
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El resultado no es IGUAL a lo esperado`)
            } else {
                console.log('La prueba pasó correctamente')
            }
        }
    }
}