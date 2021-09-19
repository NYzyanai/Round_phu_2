


canvas = document.getElementById('canvas');  
ctx=canvas.getContext('2d');
ctx.imageSmoothingEnabled=false;
ctx.imageSmoothingEnabled=false;


var movie_imgs_path=[
    'src/movie/b_phu1.png',
    'src/movie/b_phu2.png',
    'src/movie/b_phu3.png',
    'src/movie/b_phu4.png',
    'src/movie/b_phu5.png',
    'src/movie/b_phu6.png',
    'src/movie/b_phu7.png',
    'src/movie/b_phu8.png',
    'src/movie/b_phu9.png',
    'src/movie/b_phu10.png',
    'src/movie/b_phu11.png',
    'src/movie/b_phu12.png',
    'src/movie/r_phu13.png',
    'src/movie/r_phu14.png',
    'src/movie/r_phu15.png',
    'src/movie/r_phu16.png',
    'src/movie/r_phu17.png',
    'src/movie/r_phu18.png',
    'src/movie/r_phu19.png',
    'src/movie/r_phu20.png',
    'src/movie/r_phu21.png',
    'src/movie/r_phu22.png',
    'src/movie/r_phu23.png',
    'src/movie/r_phu24.png',
    'src/movie/r_phu25.png',
    'src/movie/r_phu26.png',
    'src/movie/r_phu27.png',
    'src/movie/r_phu28.png',
    'src/movie/r_phu29.png',
    'src/movie/r_phu30.png',
    'src/movie/r_phu31.png',
    'src/movie/r_phu32.png',
    'src/movie/r_phu33.png',
    'src/movie/r_phu34.png',
    'src/movie/r_phu35.png',
    'src/movie/r_phu36.png',
    'src/movie/r_phu37.png',
    'src/movie/r_phu38.png',
    'src/movie/w_line1.png',
    'src/movie/w_line2.png',
    'src/movie/w_line3.png',
    'src/movie/w_line4.png',
    'src/movie/w_line5.png',
    'src/movie/w_line6.png',
    'src/movie/w_line7.png',
    'src/movie/w_line8.png',
    'src/movie/w_line9.png',
    'src/movie/w_line10.png',
    'src/movie/f_1.png',
    'src/movie/f_2.png',
    'src/movie/f_3.png',
    'src/movie/f_4.png',
    'src/movie/f_5.png',
    'src/movie/f_6.png',
    'src/movie/f_7.png',
    'src/movie/f_8.png',
    'src/movie/f_9.png',
    'src/movie/f_11.png',
    'src/movie/f_12.png',
    'src/movie/f_13.png',
    'src/movie/f_14.png',
    'src/movie/f_15.png',
    'src/movie/f_16.png',
    'src/movie/f_17.png',
    'src/movie/f_18.png',
    'src/movie/f_19.png',
    'src/movie/f_20.png',
    'src/movie/f_21.png',
    'src/movie/f_22.png',
    'src/movie/f_23.png',
    'src/movie/f_24.png',
    'src/movie/f_25.png',
    'src/movie/f_26.png',
    'src/movie/f_27.png',
    'src/movie/f_28.png',
    'src/movie/f_29.png',
    'src/movie/f_30.png',
    'src/movie/f_31.png',
    'src/movie/f_32.png',
    'src/movie/f_33.png',
    'src/movie/f_34.png',
    'src/movie/f_35.png',
    'src/movie/f_36.png',
    'src/movie/f_37.png',
    'src/movie/f_38.png',
    'src/movie/f_39.png',
    'src/movie/f_40.png',
    'src/movie/f_41.png',
    'src/movie/f_42.png',
    'src/movie/f_43.png',
    'src/movie/f_44.png',
    'src/movie/f_45.png',
    'src/movie/f_46.png',
    'src/movie/f_47.png',
    'src/movie/f_48.png',
    'src/movie/f_49.png',
    'src/movie/f_50.png',
    'src/movie/f_51.png',
    'src/movie/f_52.png',
    'src/movie/f_53.png',
    'src/movie/f_54.png',
    'src/movie/f_55.png',
    'src/movie/f_56.png',
    'src/movie/in_1.png',
    'src/movie/in_2.png',
    'src/movie/in_3.png',
    'src/movie/in_4.png',
    'src/movie/in_5.png',
    'src/movie/in_6.png',
    'src/movie/in_7.png',
    'src/movie/in_8.png'
]

var movie_imgs=[];

function movie_load(){

//配列作成
for(var i=0;i+1>movie_imgs_path.length;i++){
    movie_imgs[i]=new Image();
    movie_imgs[i].src=movie_imgs_path[i];
}

}
//ロード終わったか確認;

var movie_loaded_flag=0



if(movie_imgCount+1<movie_imgs_path.length){
    for(var i=0;i+1>movie_imgs_path.length;i++){
        movie_imgs[i].onload=function(){
            movie_imgCount++
       }
    }
}else{

    round_movie_loop_count=round_movie_loop_count+1
    var hyouzi=round_movie_loop_count-round_movie_loop_count%4;
    ctx.drawImage(movie_imgs[hyouzi],0,0,320/pixel_w,180/pixel_h);  


}

var movie_imgCount=0;
var round_movie_loop_count=0;


function start_btn(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
        movie_stage_flag==1;
        if(movie_imgCount+1<movie_imgs_path.length){
            for(var i=0;i+1>movie_imgs_path.length;i++){
                movie_imgs[i].onload=function(){
                    movie_imgCount++
               }
            }
        }else{
        
            round_movie_loop_count=round_movie_loop_count+1
            var hyouzi=round_movie_loop_count-round_movie_loop_count%4;
            ctx.drawImage(movie_imgs[hyouzi],0,0,320/pixel_w,180/pixel_h);  
        
        
        }
}