
/////最初に読みこむべき処理

var debug_count
debug_count=10;

var normal_time

window.onload =function(){
    setup_touchevent();
    setup_touchevent_key();
    /*if(between_mil>0){
        normal_time=normal_time-between_mil;
        console.log(normal_time);
    }else if(between_mil==0){
        normal_time=30;
        console.log(normal_time);
    }*/
    setInterval(loop,30);
    sizing();
    sizing_filter();
    splash_stage_flag=1;
    /*if(!canvas || !canvas.getContext) return false;
    ctx = canvas.getContext('2d');
    splashscreen_imageDraw();*/
}

var speedup=0;
var opacity;
opacity=0;


///splash////
var splash_stage_flag
var start_btn_flag
start_btn_flag=0;
var readme_flag
readme_flag=0;
var phu_stage_flag_before=0;


var bufbetween_mil

var delete_count
delete_count=0;

var splash_screen_called
splash_screen_called=0;
////movie////
var movie_stage_flag
var readme_btn
var readme_stage_flag
///stage1_phu////
var between_mil



//newimageをするのは一階でOK
//draw擦るのは毎秒

    

var start_sec
var start_mil
var startdate
var enddate
var debug_mode_flag
debug_mode_flag=0;

//////////メイン処理////////
function loop(){
    //1秒間に30回よばれる

  


    if(touchX>300&&touchY<30){
        
        /*
        setup_touchevent();
        setInterval(loop,100);*/

        //clearInterval(loop);
        debug_mode_flag=1;
        speedup=3;
    }

    if(touchX<20&&touchY<30&touchX!==0){
        speedup=0;
    }



    startdate =new Date();


    //console.log("スタート" + start_sec + ":" + start_mil);
    

        ////////入力に応じたフラグを建てる//
        if (splash_stage_flag==1){
            

            if(splash_screen_called==0){
                splashscreen_imageDraw();
            }
            if (touchX<=160 && touchY>=40 ){ 
                start_btn_flag=1;
            }
            if((270<=touchX && touchX<=340)&&(touchY<=177&&touchY>=159)){
                readme_flag=1;
                readme_finished_flag=0;
            }
                        //フラグに応じた処理
            if (start_btn_flag==1){
                start_btn();
            }

            if(readme_flag==1){                
                readme_btn();
            }
        }

        if(readme_stage_flag==1){
            //console.log("readme_stage_flagたってるよ")
            if(0<touchX && 0<touchY){
                splash_stage_flag=1;
                readme_stage_flag=0;
                readme_flag=0;
                splash_screen_called=0;
                //console.log("判定はtrueだったよ")
            }else{
                //console.log("判定がfalseだったよ")
            }
        }

        if(movie_stage_flag==1){
            //描画の函数をよび出す！！！
            movie_imageDraw();
            if(touchX>0 && touchY>0){
                movie_stage_flag=0;
                phu_stage_flag_before=1;
            }
            splash_stage_flag=0;
        }

        if(phu_stage_flag_before==1){
            phu_stage_1();
            if(phu_stage_1_started_flag==1){
                if(phu_imgs_loaded_flag=0){
                    phu_imgs_load();
                    //console.log("まだ");
                }else{
                    if(stop_walk_flag==0){
                        if(touchX>0 && touchY>0){
                            walk_start_flag=1;
                        }
                    }
                    judge_draw();
                    phu_imgs_draw();
                }
            }
        }

    /////touchデータの初期化/////
    if(touchend=1){
    touchX=0;
    touchY=0;
    touchend=0;1
    //console.log("タッチおわり！！！！！");
    }

    enddate=new Date();

    //console.log("終わり秒数" + end_sec　+ ":"　+ end_mil);
 
    bufbetween_mil=enddate-startdate;
    //console.log("差の秒数"+bufbetween_mil);

/*
    
    if(bufbetween_mil>2){
        speedup=between_mil/10;
        antei=antei+1
        console.log("よばれた");
        setup_touchevent();
        
        //normal_time=normal_time+(between_mil);
        setInterval(loop,20000);
        clearInterval(loop);
        
        settime();
        
    }else if(antei>10){
        console.log("逆に問題ない")
        speedup=0;
        antei=0;
    }*/
    
    
    /*if(between_mil==0 && normal_time!==30){
        clearInterval();
        settime();
    }*/

    
}

/*
function settime(){
    if(between_mil==0 && normal_time!==30){
        normal_time=30;
    }else{

    normal_time=normal_time+(between_mil);
    setInterval(loop,normal_time);
    console.log(normal_time);
    }

    //setInterval(loop,normal_time);
}*/

var antei 
antei=0;