
//オーバーレイ関連
var filter_opacity;
filter_opacity = 1;

var filter_detail;

var phu_stage_1_started_flag
phu_stage_1_started_flag = 0;


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

var phu_imgs_namepath = [];

/*

phu_imgs_objects_namepath = [
    'src/fullscreen/sky1.png',
    'src/stage1_obj/mount_2.png',
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
    'src/stage1_obj/mini_cloud_5.png',
    'src/stage1_obj/human_2.png',
    'src/stage1_obj/human_3.png',

    'src/stage1_obj/human_4.png',
    'src/stage1_obj/human_5.png',
    'src/stage1_obj/fish_1.png',

    'src/stage1_obj/fish_2.png'
]

var phu_imgs_objects_array = [];
var phu_imgs_phu_array = [];
var phu_imgs_yue_array = [];


var phu_imgs_phu_namepath = [];

phu_imgs_phu_namepath = [
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
phu_height = 77;
phu_width = 85;

var phu_imgs_yue_namepath = [];

phu_imgs_yue_namepath = [
    'src/character/stand_yue.png',
    'src/character/walk_yue_1.png',
    'src/character/walk_yue_2.png',
    'src/character/walk_yue_3.png',
    'src/character/walk_yue_4.png',
    'src/character/walk_yue_5.png'
]

var phu_imgs_load_count
phu_imgs_load_count = 0;

var phu_imgs_loaded_flag
phu_imgs_loaded_flag = 0;

var phu_imgs_ghost_namepath = [];
var phu_imgs_ghost_talk_namepath = [];
phu_imgs_ghost_namepath = [
    'src/ghost/g1.png',
    'src/ghost/g2.png',
    'src/ghost/g3.png',
    'src/ghost/g4.png',
    'src/ghost/g5.png',
    'src/ghost/g6.png',
    'src/ghost/g7.png',
    'src/ghost/g8.png',
    'src/ghost/g9.png',
    'src/ghost/g10.png',
    'src/ghost/g11.png',
    'src/ghost/g12.png',
    'src/ghost/g13.png',
    'src/ghost/g14.png',
    'src/ghost/g15.png',
    'src/ghost/g16.png',
    'src/ghost/g17.png',
    'src/ghost/g18.png',
    'src/ghost/g19.png',
    'src/ghost/g20.png',
    'src/ghost/g21.png',
    'src/ghost/g22.png',
    'src/ghost/g23.png',
    'src/ghost/g24.png',
    'src/ghost/g25.png',
    'src/ghost/g26.png',
    'src/ghost/g27.png',
    'src/ghost/g28.png',
    'src/ghost/g29.png',
    'src/ghost/g30.png',
    'src/ghost/g31.png',
    'src/ghost/g32.png',
    'src/ghost/g33.png',
    'src/ghost/g34.png',
    'src/ghost/g35.png',
    'src/ghost/g36.png',
    'src/ghost/g37.png'
]

var phu_imgs_ghost_array = [];
var phu_imgs_ghost_talk_array = [];

phu_imgs_ghost_talk_namepath = [
    'src/ghost/gt1.png',
    'src/ghost/gt2.png',
    'src/ghost/gt3.png',
    'src/ghost/gt4.png',
    'src/ghost/gt5.png',
    'src/ghost/gt6.png',
    'src/ghost/gt7.png',
    'src/ghost/gt8.png',
    'src/ghost/gt9.png',
    'src/ghost/gt10.png',
    'src/ghost/gt11.png',
    'src/ghost/gt12.png',
    'src/ghost/gt13.png',
    'src/ghost/gt14.png',
    'src/ghost/gt15.png',
    'src/ghost/gt16.png',
    'src/ghost/gt17.png',
    'src/ghost/gt18.png',
    'src/ghost/gt19.png',
    'src/ghost/gt20.png',
    'src/ghost/gt21.png',
    'src/ghost/gt22.png',
    'src/ghost/gt23.png',
    'src/ghost/gt24.png',
    'src/ghost/gt25.png',
    'src/ghost/gt26.png',
    'src/ghost/gt27.png',
    'src/ghost/gt28.png',
    'src/ghost/gt29.png',
    'src/ghost/gt30.png',
    'src/ghost/gt31.png',
]
*/

/*
phu_imgs_load();

function phu_imgs_load() {
    for (var num_o = 0; num_o < phu_imgs_objects_namepath.length; num_o++) {
        phu_imgs_objects_array[num_o] = new Image();
        phu_imgs_objects_array[num_o].src = phu_imgs_objects_namepath[num_o];

        phu_imgs_objects_array[num_o].onload = function () {
            phu_imgs_load_count++
        }
    }

    for (var num_p = 0; num_p < phu_imgs_phu_namepath.length; num_p++) {
        phu_imgs_phu_array[num_p] = new Image();
        phu_imgs_phu_array[num_p].src = phu_imgs_phu_namepath[num_p];

        phu_imgs_phu_array[num_p].onload = function () {
            phu_imgs_load_count++
        }
    }

    for (var num_y = 0; num_y < phu_imgs_yue_namepath.length; num_y++) {
        phu_imgs_yue_array[num_y] = new Image();
        phu_imgs_yue_array[num_y].src = phu_imgs_yue_namepath[num_y];

        phu_imgs_yue_array[num_y].onload = function () {
            phu_imgs_load_count++
        }
    }


    for (var num_g = 0; num_g < phu_imgs_ghost_namepath.length; num_g++) {
        phu_imgs_ghost_array[num_g] = new Image();
        phu_imgs_ghost_array[num_g].src = phu_imgs_ghost_namepath[num_g];

        phu_imgs_ghost_array[num_g].onload = function () {
            phu_imgs_load_count++
        }
    }


    for (var num_gt = 0; num_gt < phu_imgs_ghost_talk_namepath.length; num_gt++) {
        phu_imgs_ghost_talk_array[num_gt] = new Image();
        phu_imgs_ghost_talk_array[num_gt].src = phu_imgs_ghost_talk_namepath[num_gt];

        phu_imgs_ghost_talk_array[num_gt].onload = function () {
            phu_imgs_load_count++
        }
    }

    if (phu_imgs_load_count >= phu_imgs_objects_namepath.length + phu_imgs_phu_namepath.length + phu_imgs_yue_namepath.length + phu_imgs_ghost_namepath.length + phu_imgs_ghost_talk_namepath.length) {
        phu_imgs_loaded_flag = 1;
    }

    console.log(phu_imgs_loaded_flag);
}

*/

var layer
var add
add = 0

var stop_walk_flag = 0;

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
var object4

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
var object4_c_h
var object4_w
var object4_h


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
var cloud_time = 0

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
var buf_step = 0


all_step_count = 0;

var walk_start_flag
walk_start_flag = 0;
var walk_time_count
walk_time_count = 0;

//普通のオブジェクトのサイズは180*320固定
var normal_obj_h
var normal_obj_w
normal_obj_h = 180;
normal_obj_w = 320;

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



    console_log();


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


    }


    var step1 = all_step_count * 0.08
    var step2 = all_step_count * 0.1
    var step3 = all_step_count * 0.3
    var step4 = all_step_count * 0.5
    var step6 = all_step_count * 0.7


    //常に描画される者はSTEP判定の外に置く
    //空

    object1 =src_sky_ar[0];

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

    object2_2 =  src_cloud_ar[0];

    object2_2_c_h = 0;
    object2_2_c_w = cloud_time
    object2_2_h = normal_obj_h;
    object2_2_w = 320;

    //山1

    object2_3 =src_mount_ar[0];

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
===
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

            /*
            object6_3=phu_imgs_objects_array[ghost_round_2];
            
            object6_3_c_w=(-100+step6);
            
 
            //console.log("座標今ここ"　+ (-100+step6))
            object6_3_w=10-(ghost_round_2*ghost_round_2)+ghost_round_2*3;
            
            if(ghost_round_2==17){
                object6_3_h=150;
                object6_3_w=200;
                object6_3_c_h=80;
                
                
            }else if(ghost_round_2==18){
                object6_3_h=Math.random()*1000;
                object6_3_c_h=50;
                object6_3_w=300;
               
            }else if(ghost_round_2==19){
                object6_3_h=Math.random()*1000;
                object6_3_w=500;
                object6_3_c_h=30;
                
            }else if(ghost_round_2==20){
                object6_3_h=Math.random()*1000;
                object6_3_w=600;
                object6_3_c_h=-60;
            }else if(ghost_round_2==21){
                object6_3_h=Math.random()*1000;
                object6_3_w=800;
                object6_3_c_h=-150;
            }else if(ghost_round_2==22){
                object6_3_h=Math.random()*1000;
                object6_3_w=Math.random()*1000;
                object6_3_c_h=Math.random()*1000;
            }
 
            console.log(object6_2_h);
            object6_3_c_w=(-150+step6)-object6_3_w/4 */

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
        character5 =src_phu_ar[walk_time_img_count];
        //character5_1=phu_imgs_yue_array[walk_time_img_count];

        character5_c_w = 200 + ((walk_time_img_count) * 14 / 5);
        //14マスを5枚で移動する
        character5_c_h = 105;
    } else {
        character5_c_w = 200;
        character5_c_h = 105;
        character5 =src_phu_ar[walk_time_img_count];
        //character5_1=phu_imgs_yue_array[0];
    }

var lay
lay = 600;

var through_flag = 0;
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



    if (step6 > -320 && step6 < 320) {

        object6 = ghost_count[0];
        object6_c_h = 0;
        object6_c_w = step6
        object6_h = 180;
        object6_w = 320;
    }

    //幽霊1は動いてもいいと思うの




    if (-1200 + step6 > -320 && -1200 + step6 < 600) {
        if (delete_count > 20) {
            object6_2_h = null;
            delete_count = 0;
            delete_alpha = 0;
        }

        if (ghost_count + 0.2 >= 36) {
            ghost_count = 0;
        } else {
            ghost_count = ghost_count + 0.2;
        }

        ghost_round = Math.floor(ghost_count);

        object6_2 = src_ghost_ar[ghost_round];



        if (object6_2_h == null) {
            object6_2_h = 90;
            object6_2_w = 170;
            object6_2_c_h = 100;
        } else {
            object6_2_h = object6_2_h + 0.45;
            object6_2_w = object6_2_w + 0.8;
            object6_2_c_h = object6_2_c_h - 0.3;
        }

        object6_2_c_w = -1200 + step6 - (object6_2_w - 1200) / 10


    } else {
        object6_2 = null;
    }



    //幽霊その３


    if (-1500 + step6 > -320 && -1500 + step6 < 640) {
        if (delete_count_3 > 20) {
            object6_1_h = null;
            delete_count_3 = 0;
            delete_alpha_3 = 0;
        }



        if (ghost_count_3 + 0.3 >= 36) {
            ghost_count_3 = 0;
        } else {
            ghost_count_3 = ghost_count_3 + 0.3;
        }
        ghost_round_3 = Math.floor(ghost_count_3);



        object6_1 = src_ghost_np[ghost_round_3];

        //console.log("座標今ここ"　+ (-100+step6))
        //object6_2_w=10-(ghost_round*ghost_round)+ghost_round*3;

        if (object6_1_h == null) {
            object6_1_h = 80;
            object6_1_w = 140;
            object6_1_c_h = 140;
        } else {
            object6_1_h = object6_1_h + 0.3;
            object6_1_w = object6_1_w + 0.6;
            object6_1_c_h = object6_1_c_h - 0.2;
        }

        object6_1_c_w = -1500 + step6 - (object6_1_w - 320) / 10


    } else {
        object6_1 = null;
    }



    if (-1350 + step6 > -320 && -1350 + step6 < 640) {

        if (ghost_count_2 + 0.2 >= 30) {
            ghost_count_2 = 0;
        } else {
            ghost_count_2 = ghost_count_2 + 0.2;
        }


        ///しゃべる幽霊はこいつ
        ghost_round_2 = Math.floor(ghost_count_2);

        object6_3 = src_ghost_talking_ar[ghost_round_2];
        object6_3_h = 100;
        object6_3_w = 160;
        object6_3_c_h = 90;
        object6_3_c_w = -1350 + step6



    } else {
        object6_3 = null;
    }

    if (object6_3 !== null) {
        if (object6_3_c_w > character5_c_w) {
            //console.log("unchoiiiiiiii")
            if (ghost_end_text_flag == 0) {
                drawtext(11, 22, "＊＊＊＊ : ", 2);

                through_flag = 1;

                stop_walk_flag = 1;
                if (gyou_buf > 2) {
                    stop_walk_flag = 0;
                }
            } else {
                stop_walk_flag = 0;
            }
        }
    }


}

var lay
lay = 600;

var through_flag = 0;
var through_count = 0;
var gyou_count = 0;
var text_time = 0;

var retu_count = 0;



var count_alpha
count_alpha = 0;
var remember_alpha
remember_alpha = 0.2