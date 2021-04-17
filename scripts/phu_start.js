console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;

var phu_walk_flag
phu_walk_flag=0;




var phu_imgs_character_namepath=[];

var phu_imgs_background_count=0;
var phu_imgs_character_count=0;

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
    'src/stage1_obj/house_of_phu2.png',
    'src/stage1_obj/forest_1.png',

    'src/stage1_obj/long_sky_morning2.png',
    'src/stage1_obj/mini_cloud_5.png'
]

var phu_imgs_objects_array=[];
var phu_imgs_phu_array=[];
var phu_imgs_yue_array=[];


var phu_imgs_phu_namepath=[];

phu_imgs_phu_namepath=[
    'src/character/s_p.png',
    'src/character/w_p_1.png',
    'src/character/w_p_2.png',
    'src/character/w_p_3.png',
    'src/character/w_p_4.png',

    'src/character/w_p_5.png',
    'src/character/l_p_1.png',
    'src/character/l_p_2.png',
    'src/character/l_p_3.png',
    'src/character/l_p_4.png',

    'src/character/l_p_5.png'
]

var phu_height
var phu_width
phu_height=77;
phu_width=85;

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
var character5
var object6


var object1_1
var object1_2
var object1_3

var object2_1
var object2_2
var object2_3

var object3_1
var object3_2
var object3_3

var object4_1
var object4_2
var object4_3

var character5_1

var object6_1
var object6_2
var object6_3

var object1_c_w
//座標のwidth
var object1_c_h
var object1_w
var object1_h

var object1_1_c_w
var object1_1_c_h
var object1_1_w
var object1_1_h

var object1_2_c_w
var object1_2_c_h
var object1_2_w
var object1_2_h

var object1_3_c_w
var object1_3_c_h
var object1_3_w
var object1_3_h

var object2_c_w
var objett2_c_h
var object2_w
var object2_h

var object2_1_c_w
var objett2_1_c_h
var object2_1_w
var object2_1_h

var object2_2_c_w
var objett2_2_c_h
var object2_2_w
var object2_2_h

var object2_3_c_w
var objett2_3_c_h
var object2_3_w
var object2_3_h


var objetc3_c_w
var object3_c_h
var object3_w
var object3_h

var objetc3_1_c_w
var object3_1_c_h
var object3_1_w
var object3_1_h

var objetc3_2_c_w
var object3_2_c_h
var object3_2_w
var object3_2_h

var objetc3_3_c_w
var object3_3_c_h
var object3_3_w
var object3_3_h


var object4_c_w
var object4_c_h
var object4_h
var object4_w

var object4_1_c_w
var object4_1_c_h
var object4_1_h
var object4_1_w

var object4_2_c_w
var object4_2_c_h
var object4_2_h
var object4_2_w

var object4_3_c_w
var object4_3_c_h
var object4_3_h
var object4_3_w

var character5_h
var character5_w
var character5_c_h
var character5_c_w

var character5_1_h
var character5_1_w
var character5_1_c_h
var character5_1_c_w
var cloud_time=0

var object6_h
var object6_w
var object6_c_h
var objetc6_c_w

var object6_1_h
var object6_1_w
var object6_1_c_h
var objetc6_1_c_w

var object6_2_h
var object6_2_w
var object6_2_c_h
var objetc6_2_c_w

var object6_3_h
var object6_3_w
var object6_3_c_h
var objetc6_3_c_w


var all_step_count
var buf_step=0


all_step_count=0;

var walk_start_flag
walk_start_flag=0;
var walk_time_count
walk_time_count=0;

//普通のオブジェクトのサイズは180*320固定
var normal_obj_h
var normal_obj_w
normal_obj_h=180;
normal_obj_w=320;

var next 
//nextはループ用
next=normal_obj_w

//空だけちがう　1600ピクセル
var sky_obj_width
sky_obj_width=1600;

var mountain 




//canvas=document.getElementById('canvas');
//ctx=canvas.getContext('2d');
//ctx.imageSmoothingEnabled=false;
var walk_time_img_count
walk_time_img_count=0;

function judge_draw(){
    
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
    ctx.textSmoothingEnabled=false;

    //歩行用演算
    if(walk_start_flag==1){
        
        walk_time_count=walk_time_count+21;
        // ４分の１とかは綺麗に２進数にできるけど他は無理　うんち

        walk_time_img_count=Math.floor(walk_time_count/100);
        //console.log(walk_time_img_count + "今ここ")
        //console.log("タイムは" + walk_time_count);
        if(walk_time_img_count>1 && walk_time_img_count<6){
            if(debug_mode_flag==0){
            all_step_count=all_step_count+2;
            }else{
                all_step_count=all_step_count+30;
            }
        }
        if(walk_time_count>600){
            walk_start_flag=0;
            walk_time_count=0;
            walk_time_img_count=0;
        }
    }

        

    //1~3枚目

    if(all_step_count<2500){

        //空
    
        object1=phu_imgs_objects_array[15];
        object1_c_h=0;
        object1_c_w=((normal_obj_w-sky_obj_width)+all_step_count/7);
        object1_h=normal_obj_h;
        object1_w=sky_obj_width;
        

        // 雲1
        object2_1=phu_imgs_objects_array[16];
        object2_1_c_h=0;

        buf_step=walk_time_count % 60
        cloud_time=cloud_time+0.1+buf_step/140;
        if(cloud_time>320){
            cloud_time=cloud_time-320
        }
        object2_1_c_w=cloud_time-320
        object2_1_h=normal_obj_h;
        object2_1_w=320;

        //雲2
        object2_2=phu_imgs_objects_array[16];
        object2_2_c_h=0;
        object2_2_c_w=cloud_time+0.1+buf_step/140;
        object2_2_h=normal_obj_h;
        object2_2_w=320;

        //山1
        object2_3=phu_imgs_objects_array[1];
        object2_3_c_h=0;
        mountain=0+all_step_count/6
        if(mountain/320>1){
            mountain=mountain%320;
        }
        object2_3_c_w=mountain
        object2_3_h=180;
        object2_3_w=320;

        //山2
        object2=phu_imgs_objects_array[1];
        object2_c_h=0;
        
        object2_c_w=mountain-320;
        object2_h=180;
        object2_w=320;  



        //ファースト森
        object3=phu_imgs_objects_array[14];
        object3_c_h=0;
        object3_c_w=(0+all_step_count/5);
        object3_h=180;
        object3_w=320;     
        
        //木
        object3_1=phu_imgs_objects_array[4];
        object3_1_c_h=0;
        object3_1_c_w=(-600+all_step_count/4);
        object3_1_h=180;
        object3_1_w=320;  

        //木　なんぼあってもこまらん
        object3_2=phu_imgs_objects_array[6];
        object3_2_c_h=0;
        object3_2_c_w=(-300+all_step_count/4);
        //奥に登場させたいときはマイナス座標
        object3_2_h=180;
        object3_2_w=320;  

        object3_3=phu_imgs_objects_array[11];
        object3_3_c_h=0;
        object3_3_c_w=(-400+all_step_count/4);
        //奥に登場させたいときはマイナス座標
        object3_3_h=normal_obj_h;
        object3_3_w=normal_obj_w;

        object4=phu_imgs_objects_array[13];
        object4_c_h=0;
        object4_c_w=(0+all_step_count/3);
        object4_h=180;
        object4_w=320;    

        //木　なんぼあってもこまらん
        object4_1=phu_imgs_objects_array[7];
        object4_1_c_h=0;
        object4_1_c_w=(-250+all_step_count/4);
        object4_1_h=180;
        object4_1_w=320;  
    

 

        object4_2=phu_imgs_objects_array[10];
        object4_2_c_h=0;
        object4_2_c_w=-15+all_step_count/3
        object4_2_h=normal_obj_h
        object4_2_w=normal_obj_w

        if(walk_time_count>0){
            character5=phu_imgs_phu_array[walk_time_img_count];
            character5_1=phu_imgs_yue_array[walk_time_img_count];
        
            character5_c_w=200+((walk_time_img_count)*14/5);
            //14マスを5枚で移動する
            character5_c_h=105;
        }else{
            character5_c_w=200;
            character5_c_h=105;
            character5=phu_imgs_phu_array[0];
            character5_1=phu_imgs_yue_array[0];
        }

        character5_h=phu_height;
        character5_w=phu_width;

        character5_1_c_w=290;
        character5_1_c_h=110;
        character5_1_h=75;
        character5_1_w=25;

        object6=phu_imgs_objects_array[12];
        object6_c_h=0;
        object6_c_w=(0+all_step_count/2);
        object6_h=180;
        object6_w=320;     
    
        object6_1=phu_imgs_objects_array[9];
        object6_1_c_h=0;
        object6_1_c_w=(-20+all_step_count/2);
        object6_1_h=normal_obj_h
        object6_1_w=normal_obj_w

        object6_2=phu_imgs_objects_array[3];
        object6_2_c_h=0;
        object6_2_c_w=(-800+all_step_count/3);
        object6_2_h=180;
        object6_2_w=320;   
    
 
    }else　if(all_step_count>=2500 && all_step_count<5000){
        

        //空
        object1=phu_imgs_objects_array[15];
        object1_c_h=0;
        object1_c_w=((normal_obj_w-sky_obj_width)+all_step_count/7);
        object1_h=normal_obj_h;
        object1_w=sky_obj_width;


        // 雲1
        object1_1=phu_imgs_objects_array[16];
        object1_1_c_h=0;

        buf_step=walk_time_count % 60
        cloud_time=cloud_time+0.1+buf_step/140;
        if(cloud_time>320){
            cloud_time=cloud_time-320
        }
        object1_1_c_w=cloud_time-320
        object1_1_h=normal_obj_h;
        object1_1_w=320;

        //雲2
        object1_2=phu_imgs_objects_array[16];
        object1_2_c_h=0;
        object1_2_c_w=cloud_time+0.1+buf_step/140;
        object1_2_h=normal_obj_h;
        object1_2_w=320;



        object2_3=phu_imgs_objects_array[1];
        object2_3_c_h=0;
        object2_3_c_w=(-next+all_step_count/6);
        object2_3_h=180;
        object2_3_w=320;  

        object2=phu_imgs_objects_array[1];
        object2_c_h=0;
        object2_c_w=(-next*2+all_step_count/6);
        object2_h=180;
        object2_w=320;

        object2_1=phu_imgs_objects_array[1];
        object2_1_c_h=0;
        object2_1_c_w=(-next*3+(all_step_count/6));
        object2_1_h=180;
        object2_1_w=320;  

        //NextNext山
        object2_2=phu_imgs_objects_array[1];
        object2_2_c_h=0;
        object2_2_c_w=(-next*4+(all_step_count)/6);
        object2_2_h=180;
        object2_2_w=320;  

        object4_1=phu_imgs_objects_array[11];
        object4_1_c_h=0;
        object4_1_c_w=(-600+all_step_count/3);
        object4_1_h=180;
        object4_1_w=320;   



        if(walk_time_count>0){
            character5=phu_imgs_phu_array[walk_time_img_count];
            character5_1=phu_imgs_yue_array[walk_time_img_count];
        
            character5_c_w=225+((walk_time_img_count)*14/5);
            //14マスを5枚で移動する
            character5_c_h=105;
        }else{
            character5_c_w=225;
            character5_c_h=105;
            character5=phu_imgs_phu_array[0];
            character5_1=phu_imgs_yue_array[0];
        }

        character5_h=phu_height;
        character5_w=phu_width;

        character5_1_c_w=290;
        character5_1_c_h=110;
        character5_1_h=75;
        character5_1_w=25;

    }else{



        //phuが驚いて倒れ込む
    
        character5_1=null;
        
        character5=phu_imgs_phu_array[10];

        lay=lay+23;
        //定数
        if((Math.floor(lay/100))<=10){
            console.log(Math.floor(lay/100));
  
            character5=phu_imgs_phu_array[Math.floor(lay/100)];
            //配列11番目は存在しない
            //character5_1=phu_imgs_yue_array[Math.floor(lay/100)];
        }
    }

    //console.log("今"　+ all_step_count);
}

var lay
lay=600;

var gyou_count=0;
var text_time=0;

var retu_count=0;


//実際のレイヤー 

function phu_imgs_draw(){

    for(layer=0;layer<=7;layer++){
        switch(layer){
            case 1:
                //いちばん奥　空など
                if(object1!=null){
                    ctx.drawImage(object1,object1_c_w*cell_w,(object1_c_h-upper_gamen)*cell_h,object1_w*cell_w,object1_h*cell_h);
                }
                
                if(object1_1!=null){
                    console.log("aああああ")
                    console.log("雲のいち"　+ object1_1_c_w)
                    ctx.drawImage(object1_1,object1_1_c_w*cell_w,(object1_1_c_h-upper_gamen)*cell_h,object1_1_w*cell_w,object1_1_h*cell_h);
                }

                if(object1_2!=null){
                    ctx.drawImage(object1_2,object1_2_c_w*cell_w,(object1_2_c_h-upper_gamen)*cell_h,object1_2_w*cell_w,object1_2_h*cell_h);
                }

                if(object1_3!=null){
                    ctx.drawImage(object1_3,object1_3_c_w*cell_w,(object1_3_c_h-upper_gamen)*cell_h,object1_3_w*cell_w,object1_3_h*cell_h);
                }


                break;
            case 2:
                //山などの背景
          
                if(object1_1!=null){
                    console.log("aああああ")
                    console.log("雲のいち"　+ object1_1_c_w)
                    ctx.drawImage(object1_1,object1_1_c_w*cell_w,(object1_1_c_h-upper_gamen)*cell_h,object1_1_w*cell_w,object1_1_h*cell_h);
                }

                if(object1_2!=null){
                    ctx.drawImage(object1_2,object1_2_c_w*cell_w,(object1_2_c_h-upper_gamen)*cell_h,object1_2_w*cell_w,object1_2_h*cell_h);
                }

                if(object1_3!=null){
                    ctx.drawImage(object1_3,object1_3_c_w*cell_w,(object1_3_c_h-upper_gamen)*cell_h,object1_3_w*cell_w,object1_3_h*cell_h);
                }



                if(object2!=null){
                    ctx.drawImage(object2,object2_c_w*cell_w,(object2_c_h-upper_gamen)*cell_h,object2_w*cell_w,object2_h*cell_h);
                }

                if(object2_1!=null){
                    ctx.drawImage(object2_1,object2_1_c_w*cell_w,(object2_1_c_h-upper_gamen)*cell_h,object2_1_w*cell_w,object2_1_h*cell_h);
                }
                
                if(object2_2!=null){
                    ctx.drawImage(object2_2,object2_2_c_w*cell_w,(object2_2_c_h-upper_gamen)*cell_h,object2_2_w*cell_w,object2_2_h*cell_h);
                }
                
                if(object2_3!=null){
                    ctx.drawImage(object2_3,object2_3_c_w*cell_w,(object2_3_c_h-upper_gamen)*cell_h,object2_3_w*cell_w,object2_3_h*cell_h);
                }
                break;
            case 3:
                //木々

                if(object3!=null){
                    ctx.drawImage(object3,object3_c_w*cell_w,(object3_c_h-upper_gamen)*cell_h,object3_w*cell_w,object3_h*cell_h);
                }

                if(object3_1!=null){
                    ctx.drawImage(object3_1,object3_1_c_w*cell_w,(object3_1_c_h-upper_gamen)*cell_h,object3_1_w*cell_w,object3_1_h*cell_h);
                }

                if(object3_2!=null){
                    ctx.drawImage(object3_2,object3_2_c_w*cell_w,(object3_2_c_h-upper_gamen)*cell_h,object3_2_w*cell_w,object3_3_h*cell_h);
                }

                if(object3_3!=null){
                    ctx.drawImage(object3_3,object3_3_c_w*cell_w,(object3_3_c_h-upper_gamen)*cell_h,object3_3_w*cell_w,object3_3_h*cell_h);
                }
                
                break;
            case 4:
                //奥の建物
                if(object4!=null){
                    ctx.drawImage(object4,object4_c_w*cell_w,(object4_c_h-upper_gamen)*cell_h,object4_w*cell_w,object4_h*cell_h);
                }

                if(object4_1!=null){
                    ctx.drawImage(object4_1,object4_1_c_w*cell_w,(object4_1_c_h-upper_gamen)*cell_h,object4_1_w*cell_w,object4_1_h*cell_h);
                }

                if(object4_2!=null){
                    ctx.drawImage(object4_2,object4_2_c_w*cell_w,(object4_2_c_h-upper_gamen)*cell_h,object4_2_w*cell_w,object4_2_h*cell_h);
                }

                if(object4_3!=null){
                    ctx.drawImage(object4_3,object4_3_c_w*cell_w,(object4_3_c_h-upper_gamen)*cell_h,object4_3_w*cell_w,object4_3_h*cell_h);
                }


                break;
            case 5:
                //キャラクター
                if(character5!=null){
                ctx.drawImage(character5,character5_c_w*cell_w,(character5_c_h-upper_gamen)*cell_h,character5_w*cell_w,character5_h*cell_h);
                }

                if(character5_1!=null){
                    ctx.drawImage(character5_1,character5_1_c_w*cell_w,(character5_1_c_h-upper_gamen)*cell_h,character5_1_w*cell_w,character5_1_h*cell_h);
                }
                break;
            case 6:
                //手前のもの
                if(object6!=null){
                    ctx.drawImage(object6,object6_c_w*cell_w,(object6_c_h-upper_gamen)*cell_h,object6_w*cell_w,object6_h*cell_h);
                }

                if(object6_1!=null){
                    ctx.drawImage(object6_1,object6_1_c_w*cell_w,(object6_1_c_h-upper_gamen)*cell_h,object6_1_w*cell_w,object6_1_h*cell_h);
                }

                if(object6_2!=null){
                    ctx.drawImage(object6_2,object6_2_c_w*cell_w,(object6_2_c_h-upper_gamen)*cell_h,object6_2_w*cell_w,object6_2_h*cell_h);
                }

                if(object6_3!=null){
                    ctx.drawImage(object6_3,object6_3_c_w*cell_w,(object6_3_c_h-upper_gamen)*cell_h,object6_3_w*cell_w,object6_3_h*cell_h);
                }
                


                break;
            case 7:
                
            //文字レイヤー
                console.log(all_step_count);
                if(all_step_count>=200&&all_step_count<1000){
                    //console.log("この業を表示する"　+ start_gyou_count);
                    drawtext(1,5,"Yue:")
                }
            

            default:


                //一番前
                //ctx.drawImage(phu_imgs_phu_array[1],20+add,20+add,100,100+add);
                //add=add+0.08;
        }
        

    }

}


//いきなりグググって上がるんじゃなくてゆっくり上がらせたい

/*

var text_move_flag
text_move_flag=0

//1の時・・・上がらせる
//2の時・・・下がらせる



if(text_move_flag=1){
    if(upper_gamen<=30){
        upper_gamen=upper_gamen+1
    }else{
        text_move_flag=0;
        text_flag=1;
        //もう表示していいよーってこと
    }
}else if(text_move_flag=2){
        text_flag=0
    if(upper_gamen>0){
        upper_gamen=upper_gamen-1
    }else{
        text_move_flag=0;
    }
}

*/
