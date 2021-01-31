var height;
var width;
var screen_height;
var screen_width;

var rate_screen_h;
var rate_screen_w;

height=180;
width=320;

console.log("canvas lib out of imagedrow");

function sizing(){
    screen_width=document.getElementById("wrapper").clientWidth;
    screen_height=document.getElementById("wrapper").clientHeight;
    var canvas =document.getElementById("canvas");


    if (screen_width*9/16<screen_height){
            //幅に合わせる
        canvas.width=screen_width;
        canvas.height=screen_width*9/16;
        
        canvas.style.left = (screen_width-canvas.width)/2+"px";
        canvas.style.top = (screen_height-canvas.height)/2+"px";
    }else if(screen_width*9/16==screen_height){
        //もしも横ながだった場合には、heightをscreenに合わせる必要がある
        canvas.height=screen_height;
        canvas.width=screen_width;
        
    }else if(screen_width*9/16>screen_height){
        //高さにあわせる
        canvas.height=screen_height;
        canvas.width=screen_height*16/9;

        canvas.style.left = (screen_width-canvas.width)/2+"px";
        canvas.style.top = (screen_height-canvas.height)/2+"px";
    }  



    rate_screen_h=180/canvas.height;
    rate_screen_w=320/canvas.width;

    console.log(rate_screen_h);
    console.log(rate_screen_w);

    

}

