console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;


var phu_imgs=[];
var phu_imgs_path=[];
var phu_imgCount

phu_imgs_path=[
    'src/animal_marmot_white_brown.png',
    'src/stage1_obj/mount_1.png'
]



function phu_imageDraw(){

    //console.log("movie_imageDrawが呼ばれた")
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    for (var i =0;i<phu_imgs_path.length;i++){
        phu_load_image(i);
        phu_draw_image(i);
    }

}
var phu_load_flag=0;

function phu_load_image(num){
    console.log("load_imageがよばれた")
    phu_imgs[num]=new Image();
    phu_imgs[num].src=phu_imgs_path[num];
    //console.log("loadしたよー");
    phu_load_flag=1;
}


function phu_draw_image(num){
    ///画像読込後にカウントアップ

    if(phu_imgCount<phu_imgs.length){
        phu_imgs[num].onload=function(){
            phu_imgCount++
            console.log("今phu_countは" + phu_imgCount);
        }
    }else{
        ctx.phu_draw_image(phu_imgs[phu_imgCount],0,0,canvas.Width,canvas.Height);
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