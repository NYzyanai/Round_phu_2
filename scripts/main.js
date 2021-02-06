
/////最初に読みこむべき処理

window.onload =function(){
    setup_touchevent();
    setInterval(loop,30);
    sizing();
    splash_stage_flag=1;
    /*if(!canvas || !canvas.getContext) return false;
    ctx = canvas.getContext('2d');
    splashscreen_imageDraw();*/
}

var opacity;
opacity=0;

///splash////
var splash_stage_flag
var start_btn_flag
start_btn_flag=0;
var readme_flag
readme_flag=0;

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

//////////メイン処理////////
function loop(){
    //1秒間に30回よばれる

    startdate =new Date();
    start_sec=startdate.getSeconds();
    start_mil=startdate.getMilliseconds();

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
            splash_stage_flag=0;
        }

    /////touchデータの初期化/////
    touchX=0;
    touchY=0;

    enddate=new Date();
    end_sec=enddate.getSeconds();
    end_mil=enddate.getMilliseconds();

    //console.log("終わり秒数" + end_sec　+ ":"　+ end_mil);
    
    between_mil=(1000*((end_sec-start_sec))+(end_mil-start_mil));
    console.log("差の秒数"+between_mil);
}
