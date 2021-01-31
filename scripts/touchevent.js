var touchX=0;
var touchY=0;

function setup_touchevent(){
    var canvas= document.getElementById("canvas");    
    
    canvas.addEventListener('click',function(e){

        
        console.log(e.type);
        console.log("クリックした座標："+e.offsetX/rate_screen_h);
        console.log("クリックした座標："+e.offsetY/rate_screen_w);
        

        /*var yue =new Image();
        yue.src= "src/yue/stand_yue.png";
    
        yue.onload = function(){
            sizing();
            /*ctx.imageSmoothingEnabled=false;
            ctx.drawImage(yue,0,0,yue.width,yue.height);
            ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
        
        }*/
        touchX=e.offsetX;
        touchY=e.offsetY;
    },false);
    
    console.log("no click");
}