const aprendiendo = function (lenguaje) {
    console.log(`Aprendiendo ${lenguaje}`);
}

aprendiendo('Java');


// Las arrow function cuando es solo un argumento se le pueden quitar los parenetsis
const aprendiendoArrow = lenguaje => `Aprendiendo ${lenguaje}`; 

console.log(aprendiendoArrow('Python'));

// PERO, cuando son dos argumentos si hay que ponerle los parentesis
const dobleArgumento = (lenguaje, framework) => `Aprendiendo ${lenguaje} y uno de sus frameworks ${framework}`;

console.log(dobleArgumento('Javascript', 'Cypress'))