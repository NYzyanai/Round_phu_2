//judge drawとは、Phuがどこまで歩いてきたときに何を表示するか？を計算する関数。
var phu_imgs_load_count = 0;

var phu_imgs_load_count = 0;
//普通のオブジェクトのサイズは180*320固定
var normal_obj_h
var normal_obj_w
normal_obj_h = 180;
normal_obj_w = 320;

//空だけちがう　1600ピクセル
var sky_obj_width
sky_obj_width = 1600;

var walk_start_flag
walk_start_flag = 0;

var cloud_time = 0

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
var buf_step = 0
var filter_end = 0;

function judge(object, point, step, c_h, height, width) {

    var between = point - step + 320
    //console.log(between);

    if (between >= 320) {
        return [object,
            height,
            width,
            c_h,
            step - point + 320];
    } else {
        return null;
    }
}




function phu_imgs_draw() {

    for (layer = 0; layer <= 8; layer++) {
        switch (layer) {
            case 1:
                //いちばん奥　空など

                if (object1 != null) {

                    ctx.drawImage(object1, object1_c_w / pixel_w, (object1_c_h - upper_gamen) / pixel_h, object1_w / pixel_w, object1_h / pixel_h);
                }

                if (object1_1 != null) {
                    ctx.drawImage(object1_1, object1_1_c_w / pixel_w, (object1_1_c_h - upper_gamen) / pixel_h, object1_1_w / pixel_w, object1_1_h / pixel_h);
                }

                if (object1_2 != null) {
                    ctx.drawImage(object1_2, object1_2_c_w / pixel_w, (object1_2_c_h - upper_gamen) / pixel_h, object1_2_w / pixel_w, object1_2_h / pixel_h);
                }

                if (object1_3 != null) {
                    ctx.drawImage(object1_3, object1_3_c_w / pixel_w, (object1_3_c_h - upper_gamen) / pixel_h, object1_3_w / pixel_w, object1_3_h / pixel_h);
                }


                break;
            case 2:
                //山などの背景

                if (object1_1 != null) {

                    ctx.drawImage(object1_1, object1_1_c_w / pixel_w, (object1_1_c_h - upper_gamen) / pixel_h, object1_1_w / pixel_w, object1_1_h / pixel_h);
                }

                if (object1_2 != null) {
                    ctx.drawImage(object1_2, object1_2_c_w / pixel_w, (object1_2_c_h - upper_gamen) / pixel_h, object1_2_w / pixel_w, object1_2_h / pixel_h);
                }

                if (object1_3 != null) {
                    ctx.drawImage(object1_3, object1_3_c_w / pixel_w, (object1_3_c_h - upper_gamen) / pixel_h, object1_3_w / pixel_w, object1_3_h / pixel_h);
                }

                if (object2 != null) {
                    //console.log("じっさいのびょうがまで　来ている");
                    ctx.drawImage(object2, object2_c_w / pixel_w, (object2_c_h - upper_gamen) / pixel_h, object2_w / pixel_w, object2_h / pixel_h);
                }

                if (object2_1 != null) {
                    ctx.drawImage(object2_1, object2_1_c_w / pixel_w, (object2_1_c_h - upper_gamen) / pixel_h, object2_1_w / pixel_w, object2_1_h / pixel_h);
                }

                if (object2_2 != null) {
                    ctx.drawImage(object2_2, object2_2_c_w / pixel_w, (object2_2_c_h - upper_gamen) / pixel_h, object2_2_w / pixel_w, object2_2_h / pixel_h);
                }

                if (object2_3 != null) {
                    ctx.drawImage(object2_3, object2_3_c_w / pixel_w, (object2_3_c_h - upper_gamen) / pixel_h, object2_3_w / pixel_w, object2_3_h / pixel_h);
                }
                break;
            case 3:
                //木々                

                if (object3 != null) {
                    //console.log("じっさいのびょうがまで　来ている");
                    ctx.drawImage(object3, object3_c_w / pixel_w, (object3_c_h - upper_gamen) / pixel_h, object3_w / pixel_w, object3_h / pixel_h);
                }

                if (object3_1 != null) {
                    ctx.drawImage(object3_1, object3_1_c_w / pixel_w, (object3_1_c_h - upper_gamen) / pixel_h, object3_1_w / pixel_w, object3_1_h / pixel_h);
                }

                if (object3_2 != null) {
                    ctx.drawImage(object3_2, object3_2_c_w / pixel_w, (object3_2_c_h - upper_gamen) / pixel_h, object3_2_w / pixel_w, object4_h / pixel_h);
                }

                if (object4 != null) {
                    ctx.drawImage(object4, object4_c_w / pixel_w, (object4_c_h - upper_gamen) / pixel_h, object4_w / pixel_w, object4_h / pixel_h);
                }

                break;
            case 4:

                //奥の建物
                if (object4 != null) {
                    ctx.drawImage(object4, object4_c_w / pixel_w, (object4_c_h - upper_gamen) / pixel_h, object4_w / pixel_w, object4_h / pixel_h);
                }

                if (object4_1 != null) {
                    ctx.drawImage(object4_1, object4_1_c_w / pixel_w, (object4_1_c_h - upper_gamen) / pixel_h, object4_1_w / pixel_w, object4_1_h / pixel_h);
                }

                if (object4_2 != null) {
                    ctx.drawImage(object4_2, object4_2_c_w / pixel_w, (object4_2_c_h - upper_gamen) / pixel_h, object4_2_w / pixel_w, object4_2_h / pixel_h);
                }

                if (object4_3 != null) {
                    ctx.drawImage(object4_3, object4_3_c_w / pixel_w, (object4_3_c_h - upper_gamen) / pixel_h, object4_3_w / pixel_w, object4_3_h / pixel_h);
                }
                break;

            case 5:
                //キャラクター

                if (character5 != null) {
                    /*console.log("来てる");
                    console.log(character5);
                    console.log(character5_c_w);
                    console.log(character5_c_h);
                    console.log(character5_w);
                    console.log(character5_h)*/


                    ctx.drawImage(character5, character5_c_w / pixel_w, (character5_c_h - upper_gamen) / pixel_h, character5_w / pixel_w, character5_h / pixel_h);
                }




                /*if(character5_1!=null){
                    ctx.drawImage(character5_1,(character5_1_c_w-20)/pixel_w,(character5_1_c_h-upper_gamen-3)/pixel_h,character5_1_w/pixel_w,character5_1_h/pixel_h);
                }*/
                break;
            case 6:

                /*if (character5 != null) {
                    /*console.log("来てる");
                    console.log(character5);
                    console.log(character5_c_w);
                    console.log(character5_c_h);
                    console.log(character5_w);
                    console.log(character5_h)

                    ctx.drawImage(character5,
                         character5_c_w / pixel_w, 
                         (character5_c_h - upper_gamen) / pixel_h,
                          character5_w / pixel_w,
                           character5_h / pixel_h);
                }
                */


                //手前のもの
                /*
                if (object6 != null) {
                    ctx.drawImage(object6, object6_c_w / pixel_w, (object6_c_h - upper_gamen) / pixel_h, object6_w / pixel_w, object6_h / pixel_h);
                }

                if (object6_1 != null) {

                    //できるだけ近くにきた段階で、透明度を０にする


                    if (object6_1_w > 180) {
                        delete_alpha_3 = delete_alpha_3 - 0.01;
                    }

                    count_alpha_3 = count_alpha_3 + 1;
                    if (count_alpha_3 >= 10) {
                        remember_alpha_3 = Math.random();
                        if (remember_alpha_3 > 0.6) {
                            remember_alpha_3 = 0.6
                        } else if (remember_alpha_3 < 0.4) {
                            remember_alpha_3 = 0.4
                        }

                        if (remember_alpha_3 + delete_alpha_3 < 0) {
                            ctx.globalAlpha = 0;
                        } else {
                            ctx.globalAlpha = remember_alpha_3 + delete_alpha_3;
                        }
                        count_alpha_3 = 0;
                    } else {
                        if (remember_alpha_3 + delete_alpha_3 < 0) {
                            ctx.globalAlpha = 0;
                        } else {
                            ctx.globalAlpha = remember_alpha_3 + delete_alpha_3;
                        }

                    }
                    if (ctx.globalAlpha == 0) {
                        delete_count_3 = delete_count_3 + 1;
                    }
                    //console.log(ctx.globalAlpha);

                    ctx.drawImage(object6_1, object6_1_c_w / pixel_w, (object6_1_c_h - upper_gamen) / pixel_h, object6_1_w / pixel_w, object6_1_h / pixel_h);
                    ctx.globalAlpha = 1;
                }

                if (object6_2 != null) {


                    //できるだけ近くにきた段階で、透明度を０にする

                    if (object6_2_w > 400) {
                        delete_alpha = delete_alpha - 0.01;
                    }

                    count_alpha = count_alpha + 1;
                    if (count_alpha >= 10) {
                        remember_alpha = Math.random();
                        if (remember_alpha > 0.6) {
                            remember_alpha = 0.6
                        } else if (remember_alpha < 0.2) {
                            remember_alpha = 0.2
                        }

                        if (remember_alpha + delete_alpha < 0) {
                            ctx.globalAlpha = 0;
                        } else {
                            ctx.globalAlpha = remember_alpha + delete_alpha;
                        }
                        count_alpha = 0;
                    } else {
                        if (remember_alpha + delete_alpha < 0) {
                            ctx.globalAlpha = 0;
                        } else {
                            ctx.globalAlpha = remember_alpha + delete_alpha;
                        }

                    }
                    if (ctx.globalAlpha == 0) {
                        delete_count = delete_count + 1;
                    }
                    //console.log(ctx.globalAlpha);

                    ctx.drawImage(object6_2, object6_2_c_w / pixel_w, (object6_2_c_h - upper_gamen) / pixel_h, object6_2_w / pixel_w, object6_2_h / pixel_h);
                    ctx.globalAlpha = 1;
                }

                if (object6_3 != null) {
                    ctx.globalAlpha = 0.8;

                    ctx.drawImage(object6_3, object6_3_c_w / pixel_w, (object6_3_c_h - upper_gamen) / pixel_h, object6_3_w / pixel_w, object6_3_h / pixel_h);
                    ctx.globalAlpha = 1;
                }
*/
                //奥の建物
                if (object6 != null) {
                    ctx.drawImage(object6, object6_c_w / pixel_w, (object6_c_h - upper_gamen) / pixel_h, object6_w / pixel_w, object6_h / pixel_h);
                }

                if (object6_1 != null) {
                    ctx.drawImage(object6_1, object6_1_c_w / pixel_w, (object6_1_c_h - upper_gamen) / pixel_h, object6_1_w / pixel_w, object6_1_h / pixel_h);
                }

                if (object6_2 != null) {
                    ctx.drawImage(object6_2, object6_2_c_w / pixel_w, (object6_2_c_h - upper_gamen) / pixel_h, object6_2_w / pixel_w, object6_2_h / pixel_h);
                }

                if (object6_3 != null) {
                    ctx.drawImage(object6_3, object6_3_c_w / pixel_w, (object6_3_c_h - upper_gamen) / pixel_h, object6_3_w / pixel_w, object6_3_h / pixel_h);
                }




                break;

            case 7:




                //ctx.drawImage(src_question_ar[0], 0 / pixel_w, (0 - upper_gamen) / pixel_h, 320 / pixel_w, 180 / pixel_h);


                //if (filter_end=="filter_end") {
                filter_end = filter_color_burn(all_step_count);
                //}

                /*filter_opacity = 1 / (all_step_count / 500);
                if (filter_opacity > 0.7) {
                    filter_opacity = 0.7;
                }
                ctxfilter.globalCompositeOperation = "color-burn";
                filter_detail = 'rgba(67,86,232,' + filter_opacity + ')';

                ctxfilter.fillStyle = filter_detail;
                ctx.fillRect(0, 0, 320 / pixel_h, 180 / pixel_w);
                ctx.globalCompositeOperation = "source-over";


                //console.log(all_step_count);*/




                break;

            case 8:

                if (all_step_count > 100) {
                    if (mama_end_text_flag == 0) {
                        drawtext(1, 10, "お母さん : ", 1);
                        if (gyou_buf > 1) {
                            stop_walk_flag = 0;
                        }
                    }
                }
                break;

            default:
        }
    }
}



//object6対比
function origin_object6(step6) {

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

//try

function mother(step6) {


    if (judge(src_ceiling_ar[0], 320, step6, 0, 180, 320) != null) {
        answer = judge(src_ceiling_ar[0], 320, step6, 0, 180, 320);
        object6 = answer[0];
        object6_h = answer[1];
        object6_w = answer[2];
        object6_c_h = answer[3];
        object6_c_w = answer[4];

    } else {

        answer = [];
        object6 = answer[0];
        object6_h = answer[1];
        object6_w = answer[2];
        object6_c_h = answer[3];
        object6_c_w = answer[4];

    }

    if (judge(src_woman_ar[0], 320, step6, 0, 180, 320) != null) {
        answer = judge(src_woman_ar[0], 320, step6, 0, 180, 320);
        object6_1 = answer[0];
        object6_1_h = answer[1];
        object6_1_w = answer[2];
        object6_1_c_h = answer[3];
        object6_1_c_w = answer[4];

    } else {

        answer = [];
        object6_1 = answer[0];
        object6_1_h = answer[1];
        object6_1_w = answer[2];
        object6_1_c_h = answer[3];
        object6_1_c_w = answer[4];

    }


    if (judge(src_man_ar[0], 320, step6, 0, 180, 320) != null) {
        answer = judge(src_man_ar[0], 320, step6, 0, 180, 320);
        object6_2 = answer[0];
        object6_2_h = answer[1];
        object6_2_w = answer[2];
        object6_2_c_h = answer[3];
        object6_2_c_w = answer[4];

    } else {

        answer = [];
        object6_2 = answer[0];
        object6_2_h = answer[1];
        object6_2_w = answer[2];
        object6_2_c_h = answer[3];
        object6_2_c_w = answer[4];

    }
}



var walk_time_count = 0;
//何回Phuの歩行関数がよばれたか
var call_walk_count = 0;
var auto_move=0;
var end_phu_count=0;
//歩行関数
function phu_walk(walk_start_flag) {

    walk_start_flag = 1;
    //draw_phu_countの意味は？

    draw_phu_count = draw_phu_count + 1 + speedup;
    //これは画像がよばれた回数
    all_step_count = all_step_count + 1 + speedup;
    //allは全体の歩行数

    if (draw_phu_count >= 4 && walk_time_img_count < 5) {

        //呼び出し回数4回超えていたら、画像を次に
        walk_time_img_count = walk_time_img_count + 1;
        draw_phu_count = 0;

    } else if (draw_phu_count >= 6 && walk_time_img_count == 5) {
        //もしも、呼ばれているのが最後のsrc_phu_ar.lengthであり、
        //呼ばれる回数がn回目だとしたら
        //ここに来たら歩行停止になる。
        draw_phu_count = 0;
        walk_time_img_count = 0;
        if (auto_move==1) {
            
        }else{
            walk_start_flag = 0;
        }
        call_walk_count = call_walk_count + 1;
    }

    if (walk_time_img_count > 0 && through_count < 100) {
        through_count = through_count + 1;
    }

    character5_w = 200;
    character5_h = 105;
    character5 = src_phu_ar[walk_time_img_count];
    character5_c_w = 225 + walk_time_img_count * 2.5;
    character5_c_h = 180;


    character5_h = phu_height;
    character5_w = phu_width;

    character5_c_h = 105;
    if(all_step_count>4250){
        character5_c_h=character5_c_h-end_phu_count;
    }else if(all_step_count>4080){
        end_phu_count=end_phu_count+1.2;
        character5_c_h=character5_c_h-end_phu_count;
    }

    character5_1_h = 75;
    character5_1_w = 25;

    return walk_start_flag;
}

function filter_color_burn(all_step_count) {

    filter_opacity = 1 / (all_step_count / 500);

    if (filter_opacity <= 0.0000001) {
        return "filter_end";
    }
    if (filter_opacity > 0.7) {
        filter_opacity = 0.7;
    }


    ctxfilter.globalCompositeOperation = "color-burn";
    filter_detail = 'rgba(67,86,232,' + filter_opacity + ')';

    ctxfilter.fillStyle = filter_detail;
    ctx.fillRect(-10, -10, 350 / pixel_h, 200 / pixel_w);
    ctx.globalCompositeOperation = "source-over";

    return "filter_continue";

    //console.log(all_step_count);
}