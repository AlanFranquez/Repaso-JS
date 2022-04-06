// Event Bubbling
// Otro metodo de evitarlo, con Delegation

const card = document.querySelector('.card');

card.addEventListener('click', (e) =>{
    // console.log(e.target.classList) // identificar la clase de las distintas partes del tarjet

    if(e.target.classList.contains('titulo')) {
        console.log('Clickeaste en el lugar de titulo')
    };

    if(e.target.classList.contains('precio')) {
        console.log('Clickeaste en el precio')
    };

    if(e.target.classList.contains('concierto')) {
        console.log('clickeaste en el concierto')
    }
})