// Ejercicio FIZZ BUZZ
// Una buena manera de practicar logica
// Todos los numeros multiplos de 3 deben incluir la palabra fizz
// Todos los numeros multiplos de 5 deben incluir la palabra buzz
// Y todos los numeros multiplos de 5 y 3 deben inlcuir las palabras fizz buzz

for(let i = 0; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} - Fizz Buzz`)
    } else if (i % 5 === 0) {
        console.log(`${i} - Buzz`)
    } else if (i % 3 === 0) {
        console.log(`${i} - Fizz`)
    } else {
        console.log(i)
    }
}