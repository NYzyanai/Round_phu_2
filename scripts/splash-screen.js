var canvas = document.getElementById('canvas');    
var ctx
var splash_img
var sound_info 

var splash_imgs_path=[
    'src/fullscreen/round_phu.png',
    'src/button/sound_info.png'
]



var splash_imgs=[];
var imgArr=[];
var imgCount=0;
var load_flag
load_flag=0;



function splashscreen_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
    for (var i =0;i<splash_imgs_path.length;i++){
            draw_image(i);
    }
    splash_screen_called=1;
    "描かれたよ！"
}

function load_image(num){
    splash_imgs[num]=new Image();
    splash_imgs[num].src=splash_imgs_path[num];
    console.log("loadしたよー");
    load_flag=1;
}

function draw_image(num){
    splash_imgs[num]=new Image();
    splash_imgs[num].src=splash_imgs_path[num];
    console.log("ここまでは来てる");

    ///画像読込後にカウントアップ
    splash_imgs[num].onload=function(){
        imgCount++
        console.log(imgCount);


    if(imgCount>=splash_imgs.length){
            console.log("imgカウントは２");

        for (var i=0;i<splash_imgs.length;i++){                
            ctx.drawImage(splash_imgs[i],0,0,canvas.width,canvas.height);
        }   
    }        
}

}

/*///////////画像描画////////*
function asplashscreen_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文
    splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

    sound_info=new Image();
    sound_info.src="src/button/sound_info.png"
        //splashimageが詠み込まれたら描画する    
    sound_info.onload = function(){
        ctx.imageSmoothingEnabled=false;
        //ctx.drawImage(splash_img,0,0,canvas.width,canvas.height);
        ctx.drawImage(sound_info,0,0,canvas.width,canvas.height);
        
    }

}
*/

///////////スタート押された時の処理

function start_btn(){
    fade_out();
    console.log("スタートするわよ！！！！！")
    if(after_fade_out()==true){
        after_fade_out_flag=0;
        start_btn_flag=0;
        movie_stage_flag=1;
        splashscreen_flag=0;
    }

}



////////

function readme_btn(){
    //console.log("うんち")
    if(after_fade_out()==true){
        after_fade_out_flag=0;
        readme_imageDraw();
        readme_stage_flag=1;
        splash_stage_flag=0;
    }else{
        if(readme_finished_flag==0){
            fade_out();
        }
    }
}

var readme_finished_flag
readme_finished_flag=0;

function readme_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    readme_img=new Image();
    readme_img.src="src/fullscreen/readme20210202.png";

        //splashimageが詠み込まれたら描画する
    readme_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(readme_img,0,0,canvas.width,canvas.height);
        readme_finished_flag=1
    }
}