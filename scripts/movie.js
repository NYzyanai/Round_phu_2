var start_movie_flag
start_movie_flag=0;

/*ctx contextって何？呪文？お決まりの呪文*/


/*
function movie_imageDraw(){


    
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
        //splashimageが詠み込まれたら描画する
        var movie_img =new Image();
        movie_img.src="src/animal_marmot_white_brown.png"
        movie_img.onload = function(){
        start_movie_flag=1;

        after_fade_out_flag=0;ß
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(movie_img,0,0,canvas.width,canvas.height);
    }

}
*/


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
var movie_imgCount=0;
var movie_load_flag=0;
var movie_loop_count=0

//別のところで０いれておかないといけない気がする


function movie_imageDraw(){

    //console.log("movie_imageDrawが呼ばれた")
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    movie_image_called=1;
    //console.log("描かれたよ！");

    if(movie_imgCount>=24){
        //console.log("アニメ開始");
        movie_loop();
    }else{
        for (var i =0;i<movie_imgs_path.length;i++){
            movie_load_image(i);
            movie_draw_image(i);
        }
    }

}

function movie_load_image(num){
    //console.log("load_imageがよばれた")
    movie_imgs[num]=new Image();
    movie_imgs[num].src=movie_imgs_path[num];
    //console.log("loadしたよー");
    movie_load_flag=1;
}



function movie_draw_image(num){
    ///画像読込後にカウントアップ

    if(movie_imgCount<=24){
    movie_imgs[num].onload=function(){
        movie_imgCount++
        //console.log("今movie_countは" + movie_imgCount);
    }
    }  
}
var round_movie_loop_count
var sum_movie_loop_count
sum_movie_loop_count=0;
var movie_escape_loop_flag=0;


function movie_loop(){
    ctx.drawImage

    if(between_mil>=0 && movie_loop_count<100){
        movie_loop_count=movie_loop_count+0.25+(between_mil/1000　);
    }

    console.log(sum_movie_loop_count);
    //いま＋０.３にしてる奴を秒基準にして、端末ごとの歳を無くす
    if(movie_loop_count>=12){
        if(movie_escape_loop_flag==0){
            movie_loop_count=0.25;

        }
            //描画に遅れる時間分足す
        sum_movie_loop_count=sum_movie_loop_count+1;
    }
    if(round_movie_loop_count==Math.floor(movie_loop_count)){
        //console.log("なし")
    }else{
        //console.log("だす")
        round_movie_loop_count=Math.floor(movie_loop_count);
        ctx.imageSmoothingEnabled=false;
        
        if(sum_movie_loop_count<=2){
            ctx.drawImage(movie_imgs[round_movie_loop_count],0,0,canvas.width,canvas.height);    
            movie_maisuu_count=movie_maisuu_count+1;
            if (movie_maisuu_count>134){
                //console.log("unchi");
                /////よく分からんがここにきたら次
                movie_stage_flag=0;
                phu_stage_flag_before=1;
            }
        }else{
            movie_escape_loop_flag=1;
            movie_maisuu_count=movie_maisuu_count+1;
            if (movie_maisuu_count>134){
                //console.log("unchi");
                                /////よく分からんがここにきたら次
                movie_stage_flag=0;
                phu_stage_flag_before=1;
            }
            ctx.drawImage(movie_imgs[round_movie_loop_count+11],0,0,canvas.width,canvas.height);  

            
            /*if((round_movie_loop_count+11)>=(movie_imgs_path.length)){
                round_movie_loop_count=movie_imgs_path.length-22;
                movie_loop_count=movie_imgs_path.length-22;
            }
            */
        }   
        }
}

var movie_maisuu_count
movie_maisuu_count=0;
