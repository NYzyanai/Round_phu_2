console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;


var phu_imgs=[];
var phu_imgs_path=[];
var phu_imgCount=0;

phu_imgs_path=[
    'src/stage1_obj/mount_1.png',
    'src/stage1_obj/tree_1.png',
    'src/stage1_obj/tree_2.png',
    'src/stage1_obj/tree_3.png',
    'src/stage1_obj/tree_4.png',
    'src/stage1_obj/tree_5.png',
    'src/stage1_obj/tree_6.png',
    'src/stage1_obj/tree_7.png',
    'src/character/stand_phu.png',
    'src/character/walk_yue_1.png'
]



function phu_imageDraw(){

    //console.log("movie_imageDrawが呼ばれた")
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    if(phu_loaded_flag==1){
        phu_draw_image();
    }else if(phu_loaded_flag==0){
            phu_load_image();
    }

} 


var phu_loaded_flag=0;

function phu_load_image(){
    ///画像読込後にカウントアップ
    for(var num=0;num<phu_imgs_path.length;num++){
    phu_imgs[num]=new Image();
    phu_imgs[num].src=phu_imgs_path[num];

    phu_imgs[num].onload=function(){
        phu_imgCount=phu_imgCount+1;

    }
    }

    if(phu_imgCount>=phu_imgs_path.length){
        phu_loaded_flag=1;
    }



}

function phu_draw_image(){
if(phu_imgCount>=phu_imgs_path.length){
    for (var j=0;j<phu_imgs.length;j++){

    ctx.drawImage(phu_imgs[j],0,0,canvas.width,canvas.height);
    }
}
}

var phu_stage_1_started_flag 
phu_stage_1_started_flag=0;


function phu_stage_1(){
    if(after_fade_out()==true){
        after_fade_out_flag=0;

        phu_stage_1_started_flag=1;
        movie_stage_flag=0;
    }else{
        if(phu_stage_1_started_flag==0){
            fade_out();
        }
    }

    if(phu_stage_1_started_flag==1){
        phu_imageDraw();
    }

}