// NEW BINDING

function hogar(auto, chicos) {
    this.autito = auto;
    this.chicos = chicos
}

const prueba = new hogar('prueba', 'prueba')
console.log(prueba)


// window binding
window.color = 'blanco';

function hola() {
    console.log(color)
};

hola()