function openEnvelope() {
    const env = document.querySelector('.envelope');
    const wrapper = document.getElementById('envelope-wrapper');
    const audio = document.getElementById('wedding-song');
    const musicBtn = document.getElementById('music-btn');

    // Inicia la animación de apertura
    env.classList.add('open');

    // Después de que la carta sube, ocultamos el sobre y activamos la música
    setTimeout(() => {
        wrapper.classList.add('hide');
        // Intentar reproducir música (algunos navegadores requieren esta interacción previa)
        audio.play();
        musicBtn.classList.add('active');
    }, 1500); 
}