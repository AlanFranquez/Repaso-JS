// While hace basicamente lo mismo que el for loop
// Pero se redacta diferente

// ESTRUCTURA DE UN WHILE LOOP

// let i = 0; // Se inicia el while

// while(i < 100) { // Condición

//     console.log(i)

//     i++; // Incremento / Decremento
// };



// Detectar pares e impares con while loop

let i = 0;

while(i <= 100) {

    if(i % 2 === 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }


    i++;
}