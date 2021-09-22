
//オーバーレイ関連
var filter_opacity;
filter_opacity = 1;

var filter_detail;

var phu_stage_1_started_flag
phu_stage_1_started_flag = 0;

var all_step_count
all_step_count = 0;

var through_flag = 0;

function phu_stage_1(touchX, touchY) {

    //もし読み込み終わっていなければ読み込む
    if (phu_imgs_loaded_flag = 0) {
        phu_imgs_load();
        return;
    } else if (touchX > 0 && touchY > 0) {
        walk_start_flag = 1;
    } else {
        //phu_stage_1_started_flag = 1;
        judge_draw();
        phu_imgs_draw();
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


var walk_time_count
walk_time_count = 0;

var next
//nextはループ用
next = normal_obj_w

//空だけちがう　1600ピクセル
var sky_obj_width
sky_obj_width = 1600;

var mountain

var start_text_flag = 0;


//何回Phuの歩行関数がよばれたか
var call_walk_count = 0;

//canvas=document.getElementById('canvas');
//ctx=canvas.getContext('2d');
//ctx.imageSmoothingEnabled=false;
var walk_time_img_count = 0;
var draw_phu_count = 0;

var ghost_count = 0;
var ghost_round = 0
var ghost_count_2 = 0;
var ghost_round_2 = 0;

var ghost_count_3 = 0;
var ghost_round_3 = 0;

var delete_alpha = 0;
var delete_count_3 = 0;
var delete_alpha_3 = 0;
var count_alpha_3 = 0;
var remember_alpha_3;
var a = 0
    ;

function judge_draw() {

    //いつもの呪文
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.textSmoothingEnabled = false;

    filter = document.getElementById('filter');
    ctxfilter = canvas.getContext('2d');
    ctxfilter.imageSmoothingEnabled = false;
    ctxfilter.textSmoothingEnabled = false;


    var step1 = all_step_count * 0.08
    var step2 = all_step_count * 0.1
    var step3 = all_step_count * 0.3
    var step4 = all_step_count * 0.5
    var step6 = all_step_count * 0.7

    var answer = [];

    //pointっていうのは、いわゆる画像の一番左。デフォルトが320
    if (judge(src_forest_ar[0], 320, step3, 0, 180, 320) != null) {
        answer = judge(src_forest_ar[0], 320, step3, 0, 180, 320);

        object3 = answer[0];
        object3_h = answer[1];
        object3_w = answer[2];
        object3_c_h = answer[3];
        object3_c_w = answer[4];

    } else if (judge(src_fish_ar[1], 940, step3, 0, 180, 320) != null) {
        //前回のポイントとは、必ず+640以上離れていないといけない
        answer = judge(src_fish_ar[1], 940, step3, 0, 180, 320);

        object3 = answer[0];
        object3_h = answer[1];
        object3_w = answer[2];
        object3_c_h = answer[3];
        object3_c_w = answer[4];

    } else {
        answer = [];
        object3 = answer[0];
        object3_h = answer[1];
        object3_w = answer[2];
        object3_c_h = answer[3];
        object3_c_w = answer[4];
    }
    phu_walk();

/*

    //歩行用演算
    if (walk_start_flag == 1) {

        //30ミリ秒に一回よばれる
        //できれば600(30*20)ミリ秒で一枚

        draw_phu_count = draw_phu_count + 1 + speedup;

        //一回の歩行で25マス、歩行時には30回呼ばれるので、25/29(30-1にしないと１ます　遅くなる)


        if (through_flag == 1 && through_count < 100) {

        } else {
            all_step_count = all_step_count + 25 / 24 + speedup;
        }

        if (draw_phu_count == 4 && walk_time_img_count < 5) {
            walk_time_img_count = walk_time_img_count + 1;

            draw_phu_count = 0;
        } else if (draw_phu_count == 4 && walk_time_img_count == 5) {
            draw_phu_count = 0;
            walk_time_img_count = 0;
            walk_start_flag = 0;

            if (through_flag == 1 && through_count < 100) {

            } else {
                all_step_count = call_walk_count * 25;
                call_walk_count = call_walk_count + 1;
            }
        }


    }*/

    //常に描画される者はSTEP判定の外に置く
    //空
    object1 = src_sky_ar[0];
    object1_c_h = 0;
    object1_c_w = (normal_obj_w - sky_obj_width) + step1;
    object1_h = normal_obj_h;
    object1_w = sky_obj_width;




    // 雲1

    object2_1 = src_cloud_ar[0];
    object2_1_c_h = 0;


    cloud_time = cloud_time + 0.1 + buf_step / 140;
    if (cloud_time > 320) {
        cloud_time = cloud_time - 320
    }
    object2_1_c_w = cloud_time - 320
    object2_1_h = normal_obj_h;
    object2_1_w = 320;

    //雲2
    object2_2 = src_cloud_ar[0];
    object2_2_c_h = 0;
    object2_2_c_w = cloud_time
    object2_2_h = normal_obj_h;
    object2_2_w = 320;

/*
    if (judge(src_cloud_ar[0], 320, cloud_time-step2, 0, 180, 320) != null) {
        answer = judge(src_forest_ar[0], 320, cloud_time-step2, 0, 180, 320);

        object3 = answer[0];
        object3_h = answer[1];
        object3_w = answer[2];
        object3_c_h = answer[3];
        object3_c_w = answer[4];

    } else if (judge(src_fish_ar[1], 940, step3, 0, 180, 320) != null) {
        //前回のポイントとは、必ず+640以上離れていないといけない
        answer = judge(src_fish_ar[1], 940, step3, 0, 180, 320);

        object3 = answer[0];
        object3_h = answer[1];
        object3_w = answer[2];
        object3_c_h = answer[3];
        object3_c_w = answer[4];


    }
    */

    //山1
    object2_3 = src_mount_ar[0];
    object2_3_c_h = 0;
    mountain = step2;
    if (mountain / 320 > 1) {
        mountain = mountain % 320;
    }
    object2_3_c_w = mountain
    object2_3_h = 180;
    object2_3_w = 320;

    //山2

    object2 = src_mount_ar[0];
    object2_c_h = 0;


    object2_c_w = mountain - 320;
    object2_h = 180;
    object2_w = 320;


    //STEPで描画するものをわける。

    //木
    if (judge(src_tree_ar[1], 200, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[1], 200, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_1 = answer[0];
        object3_1_h = answer[1];
        object3_1_w = answer[2];
        object3_1_c_h = answer[3];
        object3_1_c_w = answer[4];
    } else if (judge(src_tree_ar[5], 980, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[5], 980, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_1 = answer[0];
        object3_1_h = answer[1];
        object3_1_w = answer[2];
        object3_1_c_h = answer[3];
        object3_1_c_w = answer[4];
    } else {
        answer = [];
        object3_1 = answer[0];
        object3_1_h = answer[1];
        object3_1_w = answer[2];
        object3_1_c_h = answer[3];
        object3_1_c_w = answer[4];

    }



    if (judge(src_tree_ar[3], 550, step3, 0, 100, 320) != null) {
        answer = judge(src_tree_ar[3], 550, step3, 0, 100, 320);

        object3_2 = answer[0];
        object3_2_h = answer[1];
        object3_2_w = answer[2];
        object3_2_c_h = answer[3];
        object3_2_c_w = answer[4];

    } else if (judge(src_tree_ar[4], 1200, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[4], 1200, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_2 = answer[0];
        object3_2_h = answer[1];
        object3_2_w = answer[2];
        object3_2_c_h = answer[3];
        object3_2_c_w = answer[4];

    } else if (judge(src_tree_ar[5], 1880, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[5], 1880, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_2 = answer[0];
        object3_2_h = answer[1];
        object3_2_w = answer[2];
        object3_2_c_h = answer[3];
        object3_2_c_w = answer[4];

    } else {
        answer = [];
        object3_2 = answer[0];
        object3_2_h = answer[1];
        object3_2_w = answer[2];
        object3_2_c_h = answer[3];
        object3_2_c_w = answer[4];

    }


    if (judge(src_tree_ar[5], 900, step3, 0, 180, 320) != null) {
        answer = judge(src_tree_ar[5], 900, step3, 0, 180, 320);
        object3_3 = answer[0];
        object3_3_h = answer[1];
        object3_3_w = answer[2];
        object3_3_c_h = answer[3];
        object3_3_c_w = answer[4];


    } else if (judge(src_tree_ar[6], 1600, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[6], 1600, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_3 = answer[0];
        object3_3_h = answer[1];
        object3_3_w = answer[2];
        object3_3_c_h = answer[3];
        object3_3_c_w = answer[4];


    } else if (judge(src_tree_ar[0], 2300, step3, 0, 180, 320) != null) {

        answer = judge(src_tree_ar[0], 2300, step3, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object3_3 = answer[0];
        object3_3_h = answer[1];
        object3_3_w = answer[2];
        object3_3_c_h = answer[3];
        object3_3_c_w = answer[4];


    } else {

        answer = [];
        object3_3 = answer[0];
        object3_3_h = answer[1];
        object3_3_w = answer[2];
        object3_3_c_h = answer[3];
        object3_3_c_w = answer[4];

    }



    /////////4///////////
    if (judge(src_grass_ar[0], 540, step4, 0, 180, 320) != null) {
        answer = judge(src_grass_ar[0], 540, step4, 0, 180, 320);
        object4 = answer[0];
        object4_h = answer[1];
        object4_w = answer[2];
        object4_c_h = answer[3];
        object4_c_w = answer[4];


    } else if (judge(src_grass_ar[1], 1300, step4, 0, 180, 320) != null) {

        answer = judge(src_grass_ar[1], 1300, step4, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object4 = answer[0];
        object4_h = answer[1];
        object4_w = answer[2];
        object4_c_h = answer[3];
        object4_c_w = answer[4];

    } else if (judge(src_grass_ar[2], 1950, step4, 0, 180, 320) != null) {


        answer = judge(src_grass_ar[2], 1950, step4, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object4 = answer[0];
        object4_h = answer[1];
        object4_w = answer[2];
        object4_c_h = answer[3];
        object4_c_w = answer[4];

    } else {

        answer = [];
        object4 = answer[0];
        object4_h = answer[1];
        object4_w = answer[2];
        object4_c_h = answer[3];
        object4_c_w = answer[4];

    }

    if (judge(src_grass_ar[1], 800, step4, 0, 180, 320) != null) {
        answer = judge(src_grass_ar[1], 800, step4, 0, 180, 320);
        object4_1 = answer[0];
        object4_1_h = answer[1];
        object4_1_w = answer[2];
        object4_1_c_h = answer[3];
        object4_1_c_w = answer[4];

    } else if (judge(src_grass_ar[2], 1450, step4, 0, 180, 320) != null) {

        answer = judge(src_grass_ar[2], 1450, step4, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object4_1 = answer[0];
        object4_1_h = answer[1];
        object4_1_w = answer[2];
        object4_1_c_h = answer[3];
        object4_1_c_w = answer[4];

    } else if (judge(src_big_grass_ar[0], 2050, step4, 0, 180, 320) != null) {

        answer = judge(src_big_grass_ar[0], 2050, step4, 0, 180, 320);
        //前回のポイントとは、必ず+640以上離れていないといけない
        object4_1 = answer[0];
        object4_1_h = answer[1];
        object4_1_w = answer[2];
        object4_1_c_h = answer[3];
        object4_1_c_w = answer[4];

    } else {

        answer = [];
        object4_1 = answer[0];
        object4_1_h = answer[1];
        object4_1_w = answer[2];
        object4_1_c_h = answer[3];
        object4_1_c_w = answer[4];


    }


    //Phuの歩行関数
    //character5 =src_phu_ar[walk_time_img_count];
    //character5_1 = phu_imgs_yue_array[walk_time_img_count];


    character5_c_w = 225 + ((walk_time_img_count) * 14 / 5);
    if (through_flag == 1) {
        if (walk_time_img_count > 0 && through_count < 100) {
            through_count = through_count + 1;
        }
        character5_c_w = 225 - through_count + ((walk_time_img_count) * 14 / 5);

        if (-1350 + step6 > -320 && -1350 + step6 < 640) {

            if (ghost_count_2 + 0.2 >= 30) {
                ghost_count_2 = 0;
            } else {
                ghost_count_2 = ghost_count_2 + 0.2;
            }

            ///しゃべる幽霊はこいつ
            ghost_round_2 = Math.floor(ghost_count_2);

            object6_3 = phu_imgs_ghost_talk_array[ghost_round_2];
            object6_3_h = 100;
            object6_3_w = 160;
            object6_3_c_h = 90;
            object6_3_c_w = -1350 + step6

            //console.log(ghost_count);
            //console.log(ghost_round);


            object6_3 = phu_imgs_objects_array[ghost_round_2];

            object6_3_c_w = (-100 + step6);


            //console.log("座標今ここ"　+ (-100+step6))
            object6_3_w = 10 - (ghost_round_2 * ghost_round_2) + ghost_round_2 * 3;

            if (ghost_round_2 == 17) {
                object6_3_h = 150;
                object6_3_w = 200;
                object6_3_c_h = 80;


            } else if (ghost_round_2 == 18) {
                object6_3_h = Math.random() * 1000;
                object6_3_c_h = 50;
                object6_3_w = 300;

            } else if (ghost_round_2 == 19) {
                object6_3_h = Math.random() * 1000;
                object6_3_w = 500;
                object6_3_c_h = 30;

            } else if (ghost_round_2 == 20) {
                object6_3_h = Math.random() * 1000;
                object6_3_w = 600;
                object6_3_c_h = -60;
            } else if (ghost_round_2 == 21) {
                object6_3_h = Math.random() * 1000;
                object6_3_w = 800;
                object6_3_c_h = -150;
            } else if (ghost_round_2 == 22) {
                object6_3_h = Math.random() * 1000;
                object6_3_w = Math.random() * 1000;
                object6_3_c_h = Math.random() * 1000;
            }

            console.log(object6_2_h);
            object6_3_c_w = (-150 + step6) - object6_3_w / 4

        } else {
            object6_3 = null;
        }

    } else {



        //phuが驚いて倒れ込む

        /*
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
        */

    }

    //14マスを5枚で移動する
    character5_c_h = 105;



    character5_h = phu_height;
    character5_w = phu_width;




    if (walk_time_count > 0) {
        character5 = src_phu_ar[walk_time_img_count];
        //character5_1=phu_imgs_yue_array[walk_time_img_count];

        character5_c_w = 200 + ((walk_time_img_count) * 14 / 5);
        //14マスを5枚で移動する
        character5_c_h = 105;
    } else {
        character5_c_w = 200;
        character5_c_h = 105;
        character5 = src_phu_ar[walk_time_img_count];
        //character5_1=phu_imgs_yue_array[0];
    }

    var lay
    lay = 600;


    var through_count = 0;
    var gyou_count = 0;
    var text_time = 0;

    var retu_count = 0;


    character5_h = phu_height;
    character5_w = phu_width;

    character5_1_c_w = 290;
    character5_1_c_h = 110;
    character5_1_h = 75;
    character5_1_w = 25;



    //////////////////////////////

    origin_object6(step6);
    //mother(step6);


}

var lay
lay = 600;


var through_count = 0;
var gyou_count = 0;
var text_time = 0;

var retu_count = 0;



var count_alpha
count_alpha = 0;
var remember_alpha
remember_alpha = 0.2