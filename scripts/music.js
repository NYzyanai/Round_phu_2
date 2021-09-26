

function play_music() {
    const audio = document.querySelector('.background_audio');
    console.log(audio.volume); // 1
    audio.volume = 0.15;
    audio.play();
}

function play_text() {
    var text_audio = document.querySelector(".text_audio");
    //console.log(document.querySelector('.text_audio'));
    //console.log(text_audio);
    //console.log(text_audio.volume); // 1
    text_audio.currentTime = 0;
    text_audio.volume = 1;
    text_audio.play();
}


function settings_select() {
    var settings_select = document.querySelector(".settings_select");
    //console.log(document.querySelector('.text_audio'));
    //console.log(text_audio);
    //console.log(text_audio.volume); // 1
    settings_select.currentTime = 0;
    settings_select.volume = 1;
    settings_select.play();
}