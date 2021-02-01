
/////最初に読みこむべき処理

window.onload =function(){
    setup_touchevent();
    setInterval(loop,30);
    splash_stage_flag=1;
    splashscreen_imageDraw();

}

var opacity;
opacity=0;

///splash////
var splash_stage_flag
var start_btn_flag
start_btn_flag=0;
////movie////
var movie_stage_flag
///stage1_phu////
    

//////////メイン処理////////
function loop(){
    //1秒間に30回よばれる

        ////////入力に応じたフラグを建てる//
        if (splash_stage_flag==1){
            if (touchX<=160 && touchY>=40 ){ 
                start_btn_flag=1;
            }
            //フラグに応じた処理
            if (start_btn_flag==1){
                start_btn();
            }
        }

        if(movie_stage_flag==1){
            //描画の函数をよび出す！！！
            movie_imageDraw();
        }

    /////touchデータの初期化/////
    touchX=0;
    touchY=0;
}
