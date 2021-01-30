var height;
var width;
var screen_height;
var screen_width;

height=180;
width=320;

function imageDraw(){
    var canvas = document.getElementById('canvas');    

    var ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    var splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

    splash_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
    }
}

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


    if (rate_screen>static_rate){
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