window.onload =function(){
    setup_touchevent();
    splashscreen_imageDraw();
    setInterval(loop,30);
}




function loop(){
    //1秒間に30回よばれる

    //したい判定
    if (touchX<=160 && touchY>=40 ){
        console.log("start");
        //実効するプログラム
        console.log(splash_img.style.opacity);
        //ctx.fillrect=(0,0,canvas.width,canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // create the background gradient once

    }else{
        console.log(touchX + "と" + touchY);
    }


    touchX=0;
    touchY=0;
}