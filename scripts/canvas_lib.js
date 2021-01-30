var height;
var width;
var screen_height;
var screen_width;

height=180;
width=320;

console.log("canvas lib out of imagedrow");

function sizing(){
    screen_width=document.getElementById("wrapper").clientWidth;
    screen_height=document.getElementById("wrapper").clientHeight;

    var rate_screen;
    rate_screen =screen_height/screen_width;

    var static_rate;
    static_rate=16/9;
    /*console.log(static_rate)*/

    var canvas =document.getElementById("canvas");
    console.log (rate_screen);


    if (rate_screen>=static_rate){
        //もしも縦長だった場合には、widthをscreenにあわせる
        canvas.width=screen_width;
        canvas.height=screen_width*9/16;
        console.log("sita");
        
        canvas.style.left = (screen_width-canvas.width)/2+"px";
        canvas.style.top = (screen_height-canvas.height)/2+"px";
    }else{
        //もしも横ながだった場合には、heightをscreenに合わせる必要がある
        canvas.height=screen_height;
        canvas.width=screen_height*static_rate;
        console.log("ue");
        canvas.style.top = (screen_height-canvas.height)/2+"px";
        canvas.style.left = (screen_width-canvas.width)/2+"px";
    }

    

}

