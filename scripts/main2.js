
/////最初に読みこむべき処理

var debug_count
debug_count = 10;

var normal_time

window.onload = function () {
    //画面サイズを取得
    sizing();
    //画面タッチ時の座標出力関数
    setup_touchevent();
    //30mm/sごとに画面を更新（loop関数を呼び出す）
    setInterval(loop, 30);

    splash_stage_flag = 1;
}

var speedup = 0;
var opacity;
opacity = 0;


///splash////
var splash_stage_flag
var start_btn_flag
start_btn_flag = 0;
var readme_flag
readme_flag = 0;
var phu_stage_flag_before = 0;


var bufbetween_mil

var delete_count
delete_count = 0;

var splash_screen_called
splash_screen_called = 0;
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
debug_mode_flag = 0;
var now_stage

//////////メイン処理////////
function loop() {

    debag(touchX,touchY);
    
    //console.log(now_stage);

    if (splash_stage_flag == 1) {
        //splashモードの時、下記関数を呼ぶ
        now_stage="splash_screen";

        splash_screen(touchX,touchY);
        
        if (splash_screen_called == 0) {
            splashscreen_imageDraw();
        }
   
    }

    if (start_btn_flag == 1) {
        start_btn();
    }

    if (readme_flag == 1) {

    }

    if (readme_stage_flag == 1) {
        if (0 < touchX && 0 < touchY) {
            splash_stage_flag = 1;
            readme_stage_flag = 0;
            readme_flag = 0;
            splash_screen_called = 0;
        }

    }

    if (movie_stage_flag == 1) {
        movie_stage_flag = 0;
        phu_stage_flag_before = 1;
        /*描画の函数をよび出す！！！
        movie_imageDraw();
        if (touchX > 0 && touchY > 0) {
            movie_stage_flag = 0;
            phu_stage_flag_before = 1;
        }*/
        splash_stage_flag = 0;
    }

    if (phu_stage_flag_before == 1) {
        phu_stage_1();
        if (phu_stage_1_started_flag == 1) {
            if (phu_imgs_loaded_flag = 0) {
                phu_imgs_load();
                //console.log("まだ");
            } else {
                if (stop_walk_flag == 0) {
                    if (touchX > 0 && touchY > 0) {
                        walk_start_flag = 1;
                    }
                }
                judge_draw();
                phu_imgs_draw();
             
            }
        }
    }
////touchデータの初期化/////
    touchX = 0;
    touchY = 0;
}
