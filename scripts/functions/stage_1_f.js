//judge drawとは、Phuがどこまで歩いてきたときに何を表示するか？を計算する関数。

function judge_draw() {

    //お決まり
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.textSmoothingEnabled = false;

    //お決まり
    filter = document.getElementById('filter');
    ctxfilter = canvas.getContext('2d');
    ctxfilter.imageSmoothingEnabled = false;
    ctxfilter.textSmoothingEnabled = false;

    //一番右、一番左がどこになっているかを判定


    //常に描画される者はSTEP判定の外に置く

    //空
    //の、一番右は？
    var total_step
    //これがどれだけ距離が進んだか。
    //一番右は、totalstep,一番左はtotalstep+320

    //すべて、進む速度は10段階指定。
    //step_10 =totalstep*1
    //
    var step1 = total_step * 0.08
    var step2 = total_step * 0.1
    var step3 = total_step * 0.3
    var step3_max=step3+320;
    var step4 = total_step * 0.5
    var step6 = total_step * 0.7

    var step1 = all_step_count * 0.08
    var step2 = all_step_count * 0.1
    var step3 = all_step_count * 0.3
    var step4 = all_step_count * 0.5
    var step6 = all_step_count * 0.7

    object1=src_sky_ar[0];
    object1_c_h = 0;
    object1_c_w = (normal_obj_w - sky_obj_width) + step1;
    object1_h = normal_obj_h;
    object1_w = sky_obj_width;


    /*
    object1 = phu_imgs_objects_array[15];
    object1_c_h = 0;
    object1_c_w = (normal_obj_w - sky_obj_width) + step1;
    object1_h = normal_obj_h;
    object1_w = sky_obj_width;
    */


    //画像の左はじが、step3よりも大きく、 
    //画像の左端の座標は、固定。登場地点＋320
    //画像の右はじの座標は、固定。登場地点。
    //画像の右はじが、step3_maxよりも小さいときに判定が走る。

    //画像は、step3がｎの時に出したい。

    //では、森の出現ポイントが「0」の場合には？

    //森
    var first_forest_r =0
    var first_forest_l=first_forest_r+320;

    if(step3<first_forest_l && step3_max<first_forest_r){
        object3 = phu_imgs_objects_array[14];
        object3_c_h = 0;
        object3_c_w = step3
        object3_h = 180;
        object3_w = 320;
    }else {
        object3 = null;
    }


    /*
    if (step3 < 320) {
        //ファースト森
        object3 = phu_imgs_objects_array[14];
        object3_c_h = 0;
        object3_c_w = step3
        object3_h = 180;
        object3_w = 320;
    } else if (-640 + step3 > -320 && -640 + step3 < 320) {
        object3_c_h = 0;
        object3 = phu_imgs_objects_array[12];
        object3_c_w = -640 + step3;
        //↑が-320以上・320以下のときにのみ代入する
        object3_h = 180;
        object3_w = 320;
    } else {
        object3 = null;
    }
*/

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

    //山1
    object2_3 = phu_imgs_objects_array[1];
    object2_3_c_h = 0;
    mountain = step2;
    if (mountain / 320 > 1) {
        mountain = mountain % 320;
    }
    object2_3_c_w = mountain
    object2_3_h = 180;
    object2_3_w = 320;

    //山2
    object2 = phu_imgs_objects_array[1];
    object2_c_h = 0;

    object2_c_w = mountain - 320;
    object2_h = 180;
    object2_w = 320;



    //objetc6は13回で通過
    //object5は19回で通過
    //object4は26回で通過
    //objetc3は39回で通過

    //STEPで描画するものをわける。
    if (true) {

        //////////////////////
        if (step3 < 320) {
            //ファースト森
            object3 = phu_imgs_objects_array[14];
            object3_c_h = 0;
            object3_c_w = step3
            object3_h = 180;
            object3_w = 320;
        } else if (-640 + step3 > -320 && -640 + step3 < 320) {
            object3_c_h = 0;
            object3 = phu_imgs_objects_array[12];
            object3_c_w = -640 + step3;
            //↑が-320以上・320以下のときにのみ代入する
            object3_h = 180;
            object3_w = 320;
        } else {
            object3 = null;
        }

        //木
        if (-600 + step3 > -320 && -600 + step3 < 320) {
            object3_1 = phu_imgs_objects_array[4];
            object3_1_c_h = 0;
            object3_1_c_w = -600 + step3;
            object3_1_h = 180;
            object3_1_w = 320;
        } else {
            object3_1 = null;
        }

        if (-300 + step3 > -320 && -300 + step3 < 320) {
            //木　なんぼあってもこまらん
            object3_2 = phu_imgs_objects_array[6];
            object3_2_c_h = 0;
            object3_2_c_w = -300 + step3;
            //奥に登場させたいときはマイナス座標
            object3_2_h = 180;
            object3_2_w = 320;

            ////別のものを代入するときには、上のもの（これなら-300)に-640下数を上回らないといけないよ）;
        } else if (-950 + step3 > -320 && -950 + step3 < 320) {
            //木　なんぼあってもこまらん
            object3_2 = phu_imgs_objects_array[7];
            object3_2_c_h = 0;
            object3_2_c_w = -950 + step3;
            //奥に登場させたいときはマイナス座標
            object3_2_h = 180;
            object3_2_w = 320;
        } else {
            object3_2 = null;
        }



        if (-400 + step3 > -320 && -400 + step3 < 320) {
            object3_3 = phu_imgs_objects_array[11];
            object3_3_c_h = 0;
            object3_3_c_w = -400 + step3
            //奥に登場させたいときはマイナス座標
            object3_3_h = normal_obj_h;
            object3_3_w = normal_obj_w;
        } else if (-1200 + step3 > -320 && -1200 + step3 < 320) {
            object3_3 = phu_imgs_objects_array[4];
            object3_3_c_h = 0;
            object3_3_c_w = -1200 + step3;
            //奥に登場させたいときはマイナス座標
            object3_3_h = normal_obj_h;
            object3_3_w = normal_obj_w;
        }


        //////////////////////



        if (0 + step4 > -320 && 0 + step4 < 320) {
            object4 = phu_imgs_objects_array[13];
            object4_c_h = 0;
            object4_c_w = step4;
            object4_h = 180;
            object4_w = 320;
        } else if (-700 + step4 > -320 && -700 + step4 < 320) {
            object4 = phu_imgs_objects_array[4];
            object4_c_h = 0;
            object4_c_w = -700 + step4;
            object4_h = 180;
            object4_w = 320;
        } else if (-1400 + step4 > -320 && -1400 + step4 < 320) {
            object4 = phu_imgs_objects_array[6];
            object4_c_h = 0;
            object4_c_w = -1400 + step4;
            object4_h = 180;
            object4_w = 320;
        } else {
            object4 = null;
        }

        //木　なんぼあってもこまらん
        if (-250 + step4 > -320 && -250 + step4 < 320) {
            object4_1 = phu_imgs_objects_array[7];
            object4_1_c_h = 0;
            object4_1_c_w = -250 + step4;
            object4_1_h = 180;
            object4_1_w = 320;
        } else {
            object4_1 = null;
        }

        if (-15 + step4 > -320 && -15 + step4 < 320) {
            object4_2 = phu_imgs_objects_array[10];
            object4_2_c_h = 0;
            object4_2_c_w = -15 + step4
            object4_2_h = normal_obj_h
            object4_2_w = normal_obj_w
        }

        if (true) {
            object4_3 = null;
        }

        //Phuの歩行関数
        character5 = phu_imgs_phu_array[walk_time_img_count];
        character5_1 = phu_imgs_yue_array[walk_time_img_count];

        character5_c_w = 225 + ((walk_time_img_count) * 14 / 5);
        if (through_flag == 1) {
            if (walk_time_img_count > 0 && through_count < 100) {
                through_count = through_count + 1;
            }
            character5_c_w = 225 - through_count + ((walk_time_img_count) * 14 / 5);
        }

        //14マスを5枚で移動する
        character5_c_h = 105;


        character5_h = phu_height;
        character5_w = phu_width;



        if (walk_time_count > 0) {
            character5 = phu_imgs_phu_array[walk_time_img_count];
            //character5_1=phu_imgs_yue_array[walk_time_img_count];

            character5_c_w = 200 + ((walk_time_img_count) * 14 / 5);
            //14マスを5枚で移動する
            character5_c_h = 105;
        } else {
            character5_c_w = 200;
            character5_c_h = 105;
            character5 = phu_imgs_phu_array[0];
            //character5_1=phu_imgs_yue_array[0];
        }


        character5_h = phu_height;
        character5_w = phu_width;

        character5_1_c_w = 290;
        character5_1_c_h = 110;
        character5_1_h = 75;
        character5_1_w = 25;



        //////////////////////////////



        if (step6 > -320 && step6 < 320) {

            object6 = phu_imgs_objects_array[12];
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
            //console.log(ghost_count);
            //console.log(ghost_round);

            object6_2 = phu_imgs_ghost_array[ghost_round];

            //console.log("座標今ここ"　+ (-100+step6))
            //object6_2_w=10-(ghost_round*ghost_round)+ghost_round*3;

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


            object6_1 = phu_imgs_ghost_array[ghost_round_3];

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

    //console.log("今"　+ all_step_count);


    ////ここでPhuとGhostのエンカウントイベ始まる！
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


function aaaaaa(first_forest_r,object3_c_h,step3,object,object3_h,object3_w){
   
    var between=first_forest_r-step3+320
console.log(between);
    if(between>320 || between<0){
        return [object,object3_c_h,object3_h,object3_w,step3-first_forest_r+320];
    }else{
        return null;
    }
}