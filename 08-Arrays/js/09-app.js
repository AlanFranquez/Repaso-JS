// Metodo ForEach que se utiliza mujcho para recorrer arreglos


const carrito = [
    {nombre: 'Alan', Edad: 22, alumno: 12},
    {nombre: 'Pedro', Edad: 23, alumno: 1},
    {nombre: 'Juan', Edad: 30, alumno: 3},
    {nombre: 'Alberto', Edad: 14, alumno: 7},
    {nombre: 'Hernesto', Edad: 16, alumno: 7},
]



// Bucle for 
for (let i = 0; i < carrito.length; i++) {
    console.log(`El nombre de mi alumno es ${carrito[i].nombre} y su edad es ${carrito[i].Edad}`);
    
}

// Con el metodo forEach es más sencillo lograr lo mismo, al menos en mi opinión

carrito.forEach((producto) => {
    console.log(`${producto.nombre} tiene ${producto.Edad}`)
})
