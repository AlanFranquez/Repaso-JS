// Declaración de función (Function Declaration)

nombre(); // funcionará
function nombre() {
    console.log(3+3);
};


// Expresión de funcion (Function Expression)

nombre2(); // no funcionará
const nombre2 = function() {
    console.log(2+2);
}


// La difernecia entre una Expresion de funcion y una declaración de función es que
// La funcion de declaración puede llamarse antes de ser escrita, mientras que la de expresión no
// esto es debido a que en la primera vuelta el hosting reconoce a la expresion de funcion como una variable
// y no como una función en si 
