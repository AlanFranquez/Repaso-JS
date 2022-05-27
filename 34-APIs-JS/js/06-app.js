// Speech recognition

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando..';
    };

    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log(e.results[0][0])
        const voz = e.results[0][0].transcript;
        const confianza = e.results[0][0].confidence;
        // Tambien podriamos hacerlo alicando destructuring


        
        const p1 = document.createElement('p');
        p1.textContent = voz;

        const p2 = document.createElement('p')
        p2.innerHTML = `
            Confianza del % ${parseInt(confianza * 100)} 
        `; // se multiplica por 100 porque esta en 0 decimales

        const body = document.querySelector('body');
        body.appendChild(p1)
        body.appendChild(p2)
    }
}