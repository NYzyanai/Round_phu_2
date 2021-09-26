function settings() {
    var settings = document.getElementById("settings");
    settings.style.display = "block";
    var canvas = document.getElementById("canvas");
    canvas.style.display = "none";
    var wrapper = document.getElementById("wrapper");
    wrapper.style.display = "none";
    sf_settings_select();
}


document.getElementById("return_game").onclick = function () {
    var settings = document.getElementById("settings");
    settings.style.display = "none";
    var canvas = document.getElementById("canvas");
    canvas.style.display = "block";
    var wrapper = document.getElementById("wrapper");
    wrapper.style.display = "block";
    sf_settings_select();
}


document.getElementById("auto_move").onclick = function () {
    //automoveに切り替える
}



document.getElementById("manual_move").onclick = function () {
    //manual_moveに切り替える
}


document.getElementById("speed_up").onclick = function () {
    sf_settings_select();
    speedup++

}


document.getElementById("speed_down").onclick = function () {
    
    if(speedup>=2){
        speedup--
        sf_settings_select();
    }else{
        sf_cannot();
    }

}

document.getElementById("speed_up").onclick = function () {
    sf_settings_select();
    speedup++

}


document.getElementById("volume_down").onclick = function () {
    sf_settings_select();
    if(total_volume<=0){
        sf_cannot();

    }else{
        total_volume=total_volume-0.1;
        if(total_volume<=0){
            total_volume=0;
        }
        if( bgm_flag==1){
            sf_play_music();
        }
        sf_settings_select();

    }
}



document.getElementById("volume_up").onclick = function () {
    sf_settings_select();
    if(total_volume>=1){
        
        sf_cannot();
   
    }else{
        total_volume=total_volume+0.1;
        if(total_volume>=1){
            total_volume=1;
        }
        if( bgm_flag==1){
            sf_play_music();
        }
        sf_settings_select();

    }
}