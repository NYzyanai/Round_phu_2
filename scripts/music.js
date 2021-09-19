

function play_music() {
    const audio = document.querySelector('audio');
    console.log(audio.volume); // 1
    audio.volume = 0.15;
    audio.play();
}