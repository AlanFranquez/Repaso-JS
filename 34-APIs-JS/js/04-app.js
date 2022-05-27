// APIS PARA ABRIR Y CERRAR PANTALLA COMPLETA

const abrirBTN = document.querySelector('#abrir-pantalla-completa');
const salirBTN = document.querySelector('#salir-pantalla-completa');

abrirBTN.addEventListener('click', pantallaCompleta);
salirBTN.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
     // Es necesario elegir el sitió que queremos que se ponga en pantalla completa
     // En este caso quiero que todo se coloque en pantalla completa
     document.documentElement.requestFullscreen();
}


function cerrarPantallaCompleta() {
    document.exitFullscreen();
}
