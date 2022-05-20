// Selectores
import {mascotaInput, telefonoInput, propietarioInput, fechaInput, horaInput, sintomasInput, form} from '../selectores.js'

// Funciones
import {datosCita, nuevaCita} from '../funciones.js'

export class App {
    constructor() {
        this.initApp(); // Se inicializa acá mismo
    }

    initApp() {
        mascotaInput.addEventListener('input', datosCita);
        propietarioInput.addEventListener('input', datosCita);
        telefonoInput.addEventListener('input', datosCita);
        fechaInput.addEventListener('input', datosCita);
        horaInput.addEventListener('input', datosCita);
        sintomasInput.addEventListener('input', datosCita);

    
        // Form para agregar citas
        form.addEventListener('submit', nuevaCita)
    }
}