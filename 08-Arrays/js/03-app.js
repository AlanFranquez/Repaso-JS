// Como recorrer un array

const arr = [1,2,3,4,5,6,7,8];
const arr2 = ['Alan', 'Santiago', 'Fránquez', 'Esperben'];

// Para saber la cantidad de elementgos que tiene un array (empieza a contar desde 1); length
console.log(arr.length);
console.log(arr2.length);

//ForEach
arr.forEach((array) => {
    console.log(array);
});

//Map
arr2.map((array2) => {
    console.log(array2);
})

// tambien se puede recorrer con el bucle for
// for(let i = 0; i < array.length; i++)
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]) // Si ponemos solo la i nos recorrera las posiciones y no nos dara nigun valor más que ese
}