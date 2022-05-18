// Weakset
// PREGUNTA PARA OBTENER TRABAJO: CUAL ES LA DIFERENCIA ENTRE WEAKSET y SET
// AL WEAKSET SOLO SE LE PUEDE AÑADIR OBJETOS; AL SET CUALQUIER COSA
// NO SE PUEDE USAR .SIZE EN WEAKSET POR LO TANTO NO SE PUEDE SABER LA EXTENSION
//  Y NO ES ITERABLE, es decir, no se puede usar forEach

const debilSet = new WeakSet()

const obj = {
    nombre: 'alan',
    edad: 20
}

debilSet.add(obj);

debilSet.delete(obj)

console.log(debilSet)