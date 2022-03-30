// do while
// La diferencia entre do while y while es que do while se ejecuta al menos una vez y despues evalua la condición
// el while si no cumple la condición ya no se ejecuta

let i = 0; 

do {
    console.log(`El numero ${i}`);


    i++;
} while(i <= 100)


// Que pasaría si ejecuto un do while pero la condición no se cumple?
// Muy sencillo, al menos una vez se eejecutara, ej:


let j = 100;

do {
    console.log(`el numero es ${j}`);

    i++
} while(j < 10)