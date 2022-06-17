// Scope, el alcance que tiene una variable 

function nombre() {
    
    const cliente = 'Alan Fránquez'
    
    console.log(cliente);
};

nombre()


const cliente2 = 'Pablo'
function otrafuncion() {
    const cliente2 = 'Juan';
    console.log(cliente2);
} 

otrafuncion() // EN el escope tiene prioridad la variable que está adentro del bloque de codigo



let estado = true;
function otraprueba() {
    const clienteNuevo = 'Juan';

    if(estado) {
        const clienteNuevo = 'Pedro'
        console.log(clienteNuevo)
    }
}

otraprueba() // Traera 'Pedro'