function settings(){
    var settings=document.getElementById("settings");
    settings.style.display = "block";
    var canvas=document.getElementById("canvas");
    canvas.style.display ="none";
    var wrapper=document.getElementById("wrapper");
    wrapper.style.display ="none";
}


document.getElementById("return_game").onclick = function(){
    var settings=document.getElementById("settings");
    settings.style.display = "none";
    var canvas=document.getElementById("canvas");
    canvas.style.display ="block";
    var wrapper=document.getElementById("wrapper");
    wrapper.style.display ="block";
}


document.getElementById("auto_move").onclick = function(){
   //automoveに切り替える
}



document.getElementById("manual_move").onclick = function(){
    //manual_moveに切り替える
 }
 
 
document.getElementById("speed_up").onclick = function(){
   
            speedup ++
      
 }
 
 
document.getElementById("speed_down").onclick = function(){
   
    speedup --

}