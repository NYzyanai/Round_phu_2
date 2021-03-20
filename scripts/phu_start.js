console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;


var phu_imgs_background_array=[];
var phu_imgs_background_namepath=[];

var phu_imgs_character_array=[];
var phu_imgs_character_namepath=[];

var phu_imgs_background_count=0;
var phu_imgs_character_count=0;

phu_imgs_background_namepath=[
    'src/fullscreen/sky1.png',
    'src/stage1_obj/mount_1.png',
    'src/stage1_obj/tree_1.png',
    'src/stage1_obj/tree_2.png',
    'src/stage1_obj/tree_3.png',
    'src/stage1_obj/tree_4.png',
    'src/stage1_obj/tree_5.png',
    'src/stage1_obj/tree_6.png',
    'src/stage1_obj/tree_7.png',
]
phu_imgs_character_namepath=[
    'src/character/stand_phu.png',
    'src/character/walk_phu_1.png',
    'src/character/walk_phu_2.png',
    'src/character/walk_phu_3.png',
    'src/character/walk_phu_4.png',
    'src/character/walk_phu_5.png'
    //,
    //'src/character/walk_yue_1.png'
]




function phu_imgs_background_start(){
    //console.log("movie_imageDrawが呼ばれた")
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    if(phu_imgs_background_loaded_flag==1){
        phu_imgs_background_draw();
    }else if(phu_imgs_background_loaded_flag==0){
        phu_imgs_background_load();
    }

} 

function phu_imgs_character_start(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    if(phu_imgs_character_loaded_flag==1){
        phu_imgs_character_draw();
    }else if(phu_imgs_character_loaded_flag==0){
        phu_imgs_character_load();
    }


}




var phu_imgs_background_loaded_flag=0;
var phu_imgs_character_loaded_flag=0;


function phu_imgs_character_load(){
    for(var numc=0;numc<phu_imgs_character_namepath.length;numc++){
        phu_imgs_character_array[numc]=new Image();
        phu_imgs_character_array[numc].src=phu_imgs_character_namepath[numc];

        phu_imgs_character_array[numc].onload=function(){
            phu_imgs_character_count=phu_imgs_character_count+1;
        }
    }
    if(phu_imgs_character_count>=phu_imgs_character_namepath.length){
        phu_imgs_character_loaded_flag=1;
    }
}

function phu_imgs_background_load(){
    ///画像読込後にカウントアップ
    for(var num=0;num<phu_imgs_background_namepath.length;num++){
        phu_imgs_background_array[num]=new Image();
        phu_imgs_background_array[num].src=phu_imgs_background_namepath[num];

        phu_imgs_background_array[num].onload=function(){
            phu_imgs_background_count=phu_imgs_background_count+1;
        }  
    }
    if(phu_imgs_background_count>=phu_imgs_background_namepath.length){
        phu_imgs_background_loaded_flag=1;
    }
}


var walk_phu_count 
walk_phu_count=0



function phu_imgs_character_draw(){
        console.log("phu_drawまで呼ばれている")
        if(walk_phu_count<7){
            ctx.drawImage(phu_imgs_character_array[0],canvas.width*250/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
            walk_phu_count=walk_phu_count+1
        }else if(walk_phu_count<14){
            ctx.drawImage(phu_imgs_character_array[1],canvas.width*245/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
            walk_phu_count=walk_phu_count+1
        }else if(walk_phu_count<21){
            ctx.drawImage(phu_imgs_character_array[2],canvas.width*240/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
            walk_phu_count=walk_phu_count+1 
        }else if(walk_phu_count<28){
            ctx.drawImage(phu_imgs_character_array[3],canvas.width*235/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
            walk_phu_count=walk_phu_count+1 
        
        }else if(walk_phu_count<35){
            ctx.drawImage(phu_imgs_character_array[4],canvas.width*230/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
            walk_phu_count=walk_phu_count+1 
        }else if(walk_phu_count<42){
                ctx.drawImage(phu_imgs_character_array[5],canvas.width*225/320,canvas.height*100/180,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1 
        }else{
            walk_phu_count=0;
        }
}

function phu_imgs_background_draw(){
    if(phu_imgs_background_count>=phu_imgs_background_namepath.length){
        for (var j=0;j<phu_imgs_background_namepath.length;j++){
            ctx.drawImage(phu_imgs_background_array[j],0,0,canvas.width,canvas.height);
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
        phu_imgs_background_start();
        phu_imgs_character_start()
    }

}