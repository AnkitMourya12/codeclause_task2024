// JavaScript function to play audio
function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    const playingAudios = document.querySelectorAll('audio');

    // Pause all other playing audios
    playingAudios.forEach((playingAudio) => {
        if (!playingAudio.paused && playingAudio !== audio) {
            playingAudio.pause();
        }
    });

    // Play or pause the selected audio
    if (audio.paused) {
        audio.play();
    } 
}
