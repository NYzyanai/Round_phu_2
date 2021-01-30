function imageDraw(){
    var canvas = document.getElementById('canvas');    
        console.log("imagedraw now ");
    var ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    var splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

    splash_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
    }

    startup();
    
    function startup(){
        var canvas= document.getElementById("canvas");
    
        canvas.addEventListener('click',function(){
            console.log('clicked');

            var yue =new Image();
            yue.src= "src/yue/stand_yue.png";
        
            yue.onload = function(){
                sizing();
                ctx.imageSmoothingEnabled=false;
                ctx.drawImage(yue,0,0,yue.width,yue.height);
                /*ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);*/
           
            }
        
        },false);
        console.log("no click");
        
    }
    







}
 