window.onload =function(){
    setup_touchevent();
    splashscreen_imageDraw();
    setInterval(loop,30);
}

var opacity;

var start_flag;

function loop(){
    //1秒間に30回よばれる
    if(opacity==null){
        opacity=0;
    }


        //したい判定
        if (touchX<=160 && touchY>=40 ){
            start_flag=1;
            console.log("start");
            //実効するプログラム
            console.log(splash_img.style.opacity);
            //ctx.fillrect=(0,0,canvas.width,canvas.height);
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            // create the background gradient once

            //fade_in();

            
            



        }else{
            console.log(touchX + "と" + touchY);
        }
    touchX=0;
    touchY=0;

        if (start_flag==1){
            fade_out();
        }

    //if (opacity<=1){
        function fade_out(){
            opacity =opacity +0.03;
            console.log(opacity);
            ctx.globalAlpha=opacity;
            ctx.fillStyle="blaxk";
            ctx.fillRect(0,0,canvas.width,canvas.height);

            //}else{
             //   console.log("finished clear");
            //} 
             }
}


function fade_in(){
    let opacity= 0;
    do {
    opacity += 0.0001;
    console.log(opacity);
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="rgba(0,0,0,opacity)";
    } while (opacity < 1.1);
}