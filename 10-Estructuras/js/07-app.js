// El operador OR ||, evalua que al menos una de las dos condiciones se cumplan
// Generalmente se usa este operador para hacer validación de formularios

const efectivo = 300;
const tarjeta = 400;
const disponible = efectivo +tarjeta;

const pago = 700;

if(tarjeta > pago || tarjeta > pago || disponible >= pago) {
    console.log('Usted puede pagar')
} else {
    console.log('No no puedes pagar')
}

