
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

//////////メイン処理////////
function loop() {
    console.log("pixel_h"+ pixel_h);

    startdate = new Date();

    //デバッグモード実装

    if (touchX > 300 && touchY < 30) {
        debug_mode_flag = 1;
        speedup = 3;
        console.log ("押されたよ！");
        
    }

    if (touchX < 20 && touchY < 30 & touchX !== 0) {
        speedup = 0;
    }

    ////////入力に応じたフラグを建てる//
    if (splash_stage_flag == 1) {


        if (splash_screen_called == 0) {
            splashscreen_imageDraw();
        }
        if (touchX <= 160 && touchY >= 40) {
            start_btn_flag = 1;
        }
        if ((270 <= touchX && touchX <= 340) && (touchY <= 177 && touchY >= 159)) {
            readme_flag = 1;
            readme_finished_flag = 0;
        }

        if ((110 <= touchX && touchX <= 260) && (touchY <= 177 && touchY >= 159)) {
            //ここでSoundの設定を変える
            const audio = document.querySelector('audio');
            console.log(audio.volume); // 1
            audio.volume = 0.15;
            audio.play();
            
        }

        //フラグに応じた処理
        if (start_btn_flag == 1) {
            start_btn();
        }

        if (readme_flag == 1) {
            readme_btn();
        }
    }

    if (readme_stage_flag == 1) {
        //console.log("readme_stage_flagたってるよ")
        if (0 < touchX && 0 < touchY) {
            splash_stage_flag = 1;
            readme_stage_flag = 0;
            readme_flag = 0;
            splash_screen_called = 0;
            //console.log("判定はtrueだったよ")
        } else {
            //console.log("判定がfalseだったよ")
        }
    }

    if (movie_stage_flag == 1) {
        //描画の函数をよび出す！！！
        movie_imageDraw();
        if (touchX > 0 && touchY > 0) {
            movie_stage_flag = 0;
            phu_stage_flag_before = 1;
        }
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
                console.log(pixel_h)
            }
        }
    }

    /////touchデータの初期化/////
    if (touchend = 1) {
        touchX = 0;
        touchY = 0;
        touchend = 0; 1
        //console.log("タッチおわり！！！！！");
    }

    enddate = new Date();

    //console.log("終わり秒数" + end_sec　+ ":"　+ end_mil);

    bufbetween_mil = enddate - startdate;
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



var antei
antei = 0;