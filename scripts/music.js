

function play_music() {
    const audio = document.querySelector('.background_audio');
    console.log(audio.volume); // 1
    audio.volume = 0.15;
    audio.play();
}

function play_text(){
    var text_audio = document.querySelector(".text_audio");
//console.log(document.querySelector('.text_audio'));
//console.log(text_audio);
//console.log(text_audio.volume); // 1
text_audio.currentTime = 0;
text_audio.volume = 1;
text_audio.play();
}