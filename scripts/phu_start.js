console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;

var phu_walk_flag
phu_walk_flag=0;


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
    'src/stage1_obj/low_grass_1.png',

    'src/stage1_obj/low_grass_2.png',
    'src/stage1_obj/low_grass_3.png',
    'src/stage1_obj/middle_grass_1.png',
    'src/stage1_obj/first_house.png'
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
        //phu_imgs_background_draw();
    }else if(phu_imgs_background_loaded_flag==0){
        phu_imgs_background_load();
    }

} 

function phu_imgs_character_start(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    if(phu_imgs_character_loaded_flag==1){
        //phu_imgs_character_draw();
    }else if(phu_imgs_character_loaded_flag==0){
        //phu_imgs_character_load();
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




var phu_walk_num 
phu_walk_num =0;

function phu_imgs_character_draw(){
        //console.log("phu_drawまで呼ばれている")

/*

phu_walk_num
で描画の番号を指定する
１...stand(250/320,100/180)
2

座標：英語でcoord,coordinates

*/

var phu_stand_coord_height
var phu_stand_coord_width 
var phu_stand_imgs_height
var phu_stand_imgs_width


phu_stand_coord_height=canvas.height*105/180;
phu_stand_coord_width_a=canvas.width*255/320;
phu_stand_coord_width_b=canvas.width*260/320;
phu_stand_coord_width_c=canvas.width*257/320;
phu_stand_coord_width=canvas.width*250/320;
phu_stand_imgs_height=canvas.height*80/180;
phu_stand_imgs_width=canvas.width*50/320;


//console.log(phu_walk_flag +"歩くフラグ");

        if(phu_walk_flag==0){
            ctx.drawImage(phu_imgs_character_array[0],phu_stand_coord_width,phu_stand_coord_height,phu_stand_imgs_width,phu_stand_imgs_height);  
        }else if(phu_walk_flag==1){
            if(walk_phu_count<7){
                phu_walk_num=0;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1
            }else if(walk_phu_count<14){
                phu_walk_num=1;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1
            }else if(walk_phu_count<21){
                phu_walk_num=2;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width_a,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1 
            }else if(walk_phu_count<28){
                phu_walk_num=3;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width_c,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1 
            
            }else if(walk_phu_count<35){
                phu_walk_num=4;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width_b,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1 
            }else if(walk_phu_count<42){
                phu_walk_num=5;
                ctx.drawImage(phu_imgs_character_array[phu_walk_num],phu_stand_coord_width_a,phu_stand_coord_height,canvas.width*50/320,canvas.height*80/180);
                walk_phu_count=walk_phu_count+1 
            }else{
                walk_phu_count=0;
                phu_walk_flag=0;
                phu_walk_num=0;
                ctx.drawImage(phu_imgs_character_array[0],phu_stand_coord_width,phu_stand_coord_height,phu_stand_imgs_width,phu_stand_imgs_height);  
            }
        }
}

var phu_background_coord_width
var phu_background_coord_height
phu_background_coord_width=0;
phu_background_coord_height=0;

var phu_all_background_coord
phu_all_background_coord=0;


function phu_imgs_background_draw(){

    if(phu_background_coord_width<700){
        if(phu_imgs_background_count>=phu_imgs_background_namepath.length){
            if(phu_walk_flag==1){
                phu_background_coord_width=phu_background_coord_width+phu_walk_num/3;
                for (var j=0;j<phu_imgs_background_namepath.length;j++){
                    ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width,0,canvas.width,canvas.height);
                }
                //console.log(phu_background_coord_width + "現在の座標軸")
            }else{
                for (var j=0;j<phu_imgs_background_namepath.length;j++){
                    ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width,0,canvas.width,canvas.height);
                } 
            }
            
            if(phu_walk_flag==1){
                
                for (var j=0;j<phu_imgs_background_namepath.length;j++){
                    ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-canvas.width,0,canvas.width,canvas.height);
                }
                //console.log(phu_background_coord_width + "現在の座標軸")
            }else{
                for (var j=0;j<phu_imgs_background_namepath.length;j++){
                    ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-canvas.width,0,canvas.width,canvas.height);
                } 
            }

            //phuの動きにあわせて背景を動かす

            /*
                phu_walk_flag=1;
                for()

            */

        }

    }else if(phu_background_coord_width<1400){
        if(phu_walk_flag==1){
            phu_background_coord_width=phu_background_coord_width+phu_walk_num/3;
            for (var j=0;j<phu_imgs_background_namepath.length;j++){
                ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-canvas.width,0,canvas.width,canvas.height);
            }
            console.log(phu_background_coord_width + "現在の座標軸")
        }else{
            for (var j=0;j<phu_imgs_background_namepath.length;j++){
                ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-canvas.width,0,canvas.width,canvas.height);
            } 
        }

        if(phu_walk_flag==1){
            
            for (var j=0;j<phu_imgs_background_namepath.length;j++){
                ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-(2*canvas.width),0,canvas.width,canvas.height);
            }
            console.log(phu_background_coord_width + "現在の座標軸")
        }else{
            for (var j=0;j<phu_imgs_background_namepath.length;j++){
                ctx.drawImage(phu_imgs_background_array[j],phu_background_coord_width-(2*canvas.width),0,canvas.width,canvas.height);
            } 
        }



    }

    if(phu_imgs_character_loaded_flag==1){
        //phu_imgs_character_draw();
    }else if(phu_imgs_character_loaded_flag==0){
        phu_imgs_character_load();
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


/*レイヤーをわけて描画してみる1

一番前

キャラクター

オブジェクト1　一番近くにあるもの

オブジェクト2　建物　手前

オブジェクト3　建物　奥

オブジェクト4 木々

オブジェクト5　山々等の背景

オブジェクト6 空


まず全部ロード
*/

var phu_imgs_namepath=[];

phu_imgs_objects_namepath=[
    'src/fullscreen/sky1.png',
    'src/stage1_obj/mount_1.png',
    'src/stage1_obj/tree_1.png',
    'src/stage1_obj/tree_2.png',
    'src/stage1_obj/tree_3.png',

    'src/stage1_obj/tree_4.png',
    'src/stage1_obj/tree_5.png',
    'src/stage1_obj/tree_6.png',
    'src/stage1_obj/tree_7.png',
    'src/stage1_obj/low_grass_1.png',

    'src/stage1_obj/low_grass_2.png',
    'src/stage1_obj/low_grass_3.png',
    'src/stage1_obj/middle_grass_1.png',
    'src/stage1_obj/house_of_phu.png',
    'src/stage1_obj/forest_1.png'
]

var phu_imgs_objects_array=[];
var phu_imgs_phu_array=[];
var phu_imgs_yue_array=[];


var phu_imgs_phu_namepath=[];

phu_imgs_phu_namepath=[
    'src/character/stand_phu.png',
    'src/character/walk_phu_1.png',
    'src/character/walk_phu_2.png',
    'src/character/walk_phu_3.png',
    'src/character/walk_phu_4.png',
    'src/character/walk_phu_5.png',
    'src/character/lay_phu_1.png',
    'src/character/lay_phu_2.png',
    'src/character/lay_phu_3.png',
    'src/character/lay_phu_4.png',
    'src/character/lay_phu_5.png'
]

var phu_imgs_yue_namepath=[];

phu_imgs_yue_namepath=[
    'src/character/stand_yue.png',
    'src/character/walk_yue_1.png',
    'src/character/walk_yue_2.png',
    'src/character/walk_yue_3.png',
    'src/character/walk_yue_4.png',
    'src/character/walk_yue_5.png'
]

var phu_imgs_load_count
phu_imgs_load_count=0;

var phu_imgs_loaded_flag
phu_imgs_loaded_flag=0;


phu_imgs_load();

function phu_imgs_load(){
    for(var num_o=0;num_o<phu_imgs_objects_namepath.length;num_o++){
        phu_imgs_objects_array[num_o]=new Image();
        phu_imgs_objects_array[num_o].src=phu_imgs_objects_namepath[num_o];
        
        phu_imgs_objects_array[num_o].onload=function(){
            phu_imgs_load_count++
        }
    }

    for(var num_p=0;num_p<phu_imgs_phu_namepath.length;num_p++){
        phu_imgs_phu_array[num_p]=new Image();
        phu_imgs_phu_array[num_p].src=phu_imgs_phu_namepath[num_p];
        
        phu_imgs_phu_array[num_p].onload=function(){
            phu_imgs_load_count++
        }
    }

    for(var num_y=0;num_y<phu_imgs_yue_namepath.length;num_y++){
        phu_imgs_yue_array[num_y]=new Image();
        phu_imgs_yue_array[num_y].src=phu_imgs_yue_namepath[num_y];
        
        phu_imgs_yue_array[num_y].onload=function(){
            phu_imgs_load_count++
        }
    }

    if(phu_imgs_load_count>=phu_imgs_objects_namepath.length+phu_imgs_phu_namepath.length+phu_imgs_yue_namepath.length){
        phu_imgs_loaded_flag=1;
    }

    console.log(phu_imgs_loaded_flag);
}

var layer
var add
add=0

var object1
var object2
var object3
var object4
var object5
var object6


var object1_1
var object2_1
var object3_1
var object4_1
var object5_1
var object6_1

var object1_c_w
//座標のwidth
var object1_c_h
var object1_w
var object1_h

var object1_1_c_w
var object1_1_c_h
var object1_1_w
var object1_1_h

var object2_c_w
var objett2_c_h
var object2_w
var object2_h

var object2_1_c_w
var objett2_1_c_h
var object2_1_w
var object2_1_h

var objetc3_c_w
var object3_c_h
var object3_w
var object3_h

var objetc3_1_c_w
var object3_1_c_h
var object3_1_w
var object3_1_h

var object4_c_w
var object4_c_h
var object4_h
var object4_w

var object5_h
var object5_w
var object5_c_h
var objetc5_c_w

var object6_h
var object6_w
var object6_c_h
var objetc6_c_w



var all_step_count
all_step_count=0;

var walk_start_flag
walk_start_flag=0;
var walk_time_count
walk_time_count=0;

//canvas=document.getElementById('canvas');
//ctx=canvas.getContext('2d');
//ctx.imageSmoothingEnabled=false;
var walk_time_img_count
walk_time_img_count=0;

function judge_draw(){
    
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
        
    if(walk_start_flag==1){
        all_step_count=all_step_count+1;
        walk_time_count=walk_time_count+21;
        // ４分の１とかは綺麗に２進数にできるけど他は無理　うんち

        walk_time_img_count=Math.floor(walk_time_count/100);
        //console.log(walk_time_img_count + "今ここ")
        console.log("タイムは" + walk_time_count);
        if(walk_time_count>600){
            walk_start_flag=0;
            walk_time_count=0;
            walk_time_img_count=0;
        }
    }

    if(true){
        object1=phu_imgs_objects_array[0];
        object1_c_h=0;
        object1_c_w=(0+all_step_count/6);
        object1_h=180;
        object1_w=320;

        object1_1=phu_imgs_objects_array[0];
        object1_1_c_h=0;
        object1_1_c_w=(0+all_step_count/6);
        object1_1_h=180;
        object1_1_w=320;

        object2=phu_imgs_objects_array[1];
        object2_c_h=0;
        object2_c_w=(0+all_step_count/5);
        object2_h=180;
        object2_w=320;

        object2_1=phu_imgs_objects_array[1];
        object2_1_c_h=0;
        object2_1_c_w=(0+all_step_count/5);
        object2_1_h=180;
        object2_1_w=320;  

        object3=phu_imgs_objects_array[14];
        object3_c_h=0;
        object3_c_w=(0+all_step_count/4);
        object3_h=180;
        object3_w=320;     
        
        object3_1=phu_imgs_objects_array[4];
        object3_1_c_h=0;
        object3_1_c_w=(20+all_step_count/4);
        object3_1_h=180;
        object3_1_w=320;  

        object4=phu_imgs_objects_array[13];
        object4_c_h=0;
        object4_c_w=(0+all_step_count/3);
        object4_h=180;
        object4_w=320;     

        object4_1=phu_imgs_objects_array[11];
        object4_1_c_h=0;
        object4_1_c_w=(100+all_step_count/3);
        object4_1_h=180;
        object4_1_w=320;   

        if(walk_time_count>0){
        object5=phu_imgs_phu_array[walk_time_img_count];
        }else{
            object5=phu_imgs_phu_array[0];
           
        }
        object5_c_w=255;
        object5_c_h=105;
        object5_h=80;
        object5_w=50;

        object6=phu_imgs_objects_array[12];
        object6_c_h=0;
        object6_c_w=(0+all_step_count/2);
        object6_h=180;
        object6_w=320;     
    
 
    }else{

    }

    console.log("今"　+ all_step_count);
}

function phu_imgs_draw(){

    for(layer=0;layer<=6;layer++){
        switch(layer){
            case 1:
                //いちばん奥　空など
                ctx.drawImage(object1,object1_c_w*cell_w,object1_c_h*cell_h,object1_w*cell_w,object1_h*cell_h);
                ctx.drawImage(object1_1,(object1_c_w-320)*cell_w,object1_c_h,object1_w*cell_w,object1_h*cell_h);
                add=add+0.05;
                break;
            case 2:
                //山などの背景
                ctx.drawImage(object2,object2_c_w*cell_w,object2_c_h*cell_h,object2_w*cell_w,object2_h*cell_h);
                ctx.drawImage(object2_1,(object2_1_c_w-320)*cell_w,object2_1_c_h*cell_h,object2_1_w*cell_w,object2_1_h*cell_h);
                break;
            case 3:
                //木々
                ctx.drawImage(object3,object3_c_w*cell_w,object3_c_h*cell_h,object3_w*cell_w,object3_h*cell_h);
                ctx.drawImage(object3_1,(object3_1_c_w-200)*cell_w,object3_1_c_h*cell_h,object3_1_w*cell_w,object3_1_h*cell_h);
                break;
            case 4:
                //奥の建物
                ctx.drawImage(object4,object4_c_w*cell_w,object4_c_h*cell_h,object4_w*cell_w,object4_h*cell_h);
                ctx.drawImage(object4_1,(object4_1_c_w-320)*cell_w,object4_1_c_h*cell_h,object4_1_w*cell_w,object4_1_h*cell_h);
                break;
            case 5:
                //キャラクター
                ctx.drawImage(object5,object5_c_w*cell_w,object5_c_h*cell_h,object5_w*cell_w,object5_h*cell_h);
                //ctx.drawImage(object5_1,object5_1_c_w*cell_w,object5_1_c_h*cell_h,object5_1_w*cell_w,object5_1_h*cell_h);
                break;
            case 6:
                //手前のもの
                ctx.drawImage(object6,object6_c_w*cell_w,object6_c_h*cell_h,object6_w*cell_w,object6_h*cell_h);
                break;
            default:
                //一番前
                //ctx.drawImage(phu_imgs_phu_array[1],20+add,20+add,100,100+add);
                //add=add+0.08;
        }
        
    }

}