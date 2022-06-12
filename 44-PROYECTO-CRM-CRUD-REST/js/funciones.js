export function imprimirMensaje(mensaje) {

    const norepetir = document.querySelector('.norepetir');

    if(!norepetir) {
        const div = document.createElement('div');
        div.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'rounded', 'nax-w-lg', 'py-3', 'px-4', 'norepetir', 'text-center', 'mt-5', 'mx-auto');
        div.textContent = mensaje;
    
        const form = document.querySelector('form');
    
        form.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 3000);
    }

    

}