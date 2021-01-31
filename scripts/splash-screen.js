function imageDraw(){
    var canvas = document.getElementById('canvas');    
    var ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    var splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

        //splashimageが詠み込まれたら描画する
    splash_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
    }





}