var canvas = document.getElementById('canvas');    
var ctx
var splash_img


////////////画像描画////////
function splashscreen_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

        //splashimageが詠み込まれたら描画する
    splash_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
    }


}

///////////スタート押された時の処理

function start_btn(){
    fade_out();
    if(after_fade_out()==true){
        start_btn_flag=0;
        movie_stage_flag=1;
    }

}

