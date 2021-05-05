var touchX=0;
var touchY=0;

function setup_touchevent(){
    var canvas= document.getElementById("canvas");    
    
    canvas.addEventListener('click',function(e){

        
        console.log(e.type);
        console.log("クリックした座標X："+e.offsetX*rate_screen_w);
        /*console.log("offsetXは？" +e.offsetX);
        console.log("rate_screem_wは？"+rate_screen_w);*/

        console.log("クリックした座標Y："+e.offsetY*rate_screen_h);
        /*console.log("offsetYは？" +e.offsetY);
        console.log("rate_screen_hは？" + rate_screen_h)*/

        /*var yue =new Image();
        yue.src= "src/yue/stand_yue.png";
    
        yue.onload = function(){
            sizing();
            /*ctx.imageSmoothingEnabled=false;
            ctx.drawImage(yue,0,0,yue.width,yue.height);
            ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
        
        }*/
        touchX=e.offsetX*rate_screen_w;
        touchY=e.offsetY*rate_screen_h;
    },false);

    
    console.log("no click");
}



function setup_touchevent_key(){
    var canvas= document.getElementById("canvas");    
    
    canvas.addEventListener('keydown',function(e){
        console.log("aaaaaaaaa")
        console.log("キーコード"　+ e.keyCode);
    },false);

    
    console.log("no click");
}