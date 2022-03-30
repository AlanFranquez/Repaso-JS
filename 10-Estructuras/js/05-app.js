// Switch. es mejor usar esto cuando son varias opciones para evaluar
// el default seria como un else. y siempre debe ser puesto
// tambien es muy importante el break luego de un caso o del default

const formaPago = prompt('Cual es tu forma de pago?');

switch (formaPago) {
    case 'tarjeta':
            console.log('El pibe pago con tarjeta')
        break;

    case 'efectivo':
            console.log('El pibe pago con efectivo')
        break;

    case 'monedas':
            console.log('El pibe pago con monedas')
        break;

    default:
        console.log('No se ha solicitado metodo de pago')
        break;
}