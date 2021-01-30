function imageDraw(){
    var cvs = document.getElementById('Round_phu');
    var ctx=cvs.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    var splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

    splash_img.onload = function(){
        ctx.drawImage(splash_img,0,0,1600,900);
    }
}