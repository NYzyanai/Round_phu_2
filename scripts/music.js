var total_volume=0.5; 
const audio = document.querySelector('.background_audio');
var bgm_flag=0

function sf_play_music() {
   
    console.log(audio.volume); // 1
    audio.volume = total_volume*0.8;
    audio.play();

    bgm_flag=1;

    
    audio.addEventListener('pause', (audio) => {
        bgm_flag=0;
    });

    audio.addEventListener('ended', (audio) => {
        bgm_flag=0;
    });
}




function sf_play_text() {
    var text_audio = document.querySelector(".text_audio");
    //console.log(document.querySelector('.text_audio'));
    //console.log(text_audio);
    //console.log(text_audio.volume); // 1
    text_audio.currentTime = 0;
    text_audio.volume = total_volume;
    text_audio.play();
}


function sf_settings_select() {
    var settings_select = document.querySelector(".settings_select");
    //console.log(document.querySelector('.text_audio'));
    //console.log(text_audio);
    //console.log(text_audio.volume); // 1
    settings_select.currentTime = 0;
    settings_select.volume = total_volume;
    settings_select.play();
}



function sf_cannot() {
    var cannot = document.querySelector(".cannot");
    //console.log(document.querySelector('.text_audio'));
    //console.log(text_audio);
    //console.log(text_audio.volume); // 1
    cannot.currentTime = 0;
    cannot.volume = total_volume;
    cannot.play();
}

