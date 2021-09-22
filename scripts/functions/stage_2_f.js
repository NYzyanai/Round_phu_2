//judge drawとは、Phuがどこまで歩いてきたときに何を表示するか？を計算する関数。


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

    for (layer = 0; layer <= 7; layer++) {
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
                    ctx.drawImage(character5, character5_c_w / pixel_w, (character5_c_h - upper_gamen) / pixel_h, character5_w / pixel_w, character5_h / pixel_h);
                }

                /*if(character5_1!=null){
                    ctx.drawImage(character5_1,(character5_1_c_w-20)/pixel_w,(character5_1_c_h-upper_gamen-3)/pixel_h,character5_1_w/pixel_w,character5_1_h/pixel_h);
                }*/
                break;
            case 6:
                //手前のもの
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



                break;

            case 7:

                //文字レイヤー

                /*
                ctxfilter.globalCompositeOperation = "malutiply";
      
                ctxfilter.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
                ctxfilter.fillStyle = 'rgba(67,86,232,0.5)'; //塗りつぶしの色は赤
                ctxfilter.fillRect(10,10,100,200);
    
                ctxfilter.globalCompositeOperation ="overlay";
    
                ctxfilter.fillStyle = 'rgba(67,86,232,0.5)'; //塗りつぶしの色は赤
                ctxfilter.fillRect(100,10,100,400);
                */



                filter_opacity = 1 / (all_step_count / 500);
                if (filter_opacity > 0.7) {
                    filter_opacity = 0.7;
                }


                ctxfilter.globalCompositeOperation = "color-burn";
                filter_detail = 'rgba(67,86,232,' + filter_opacity + ')';

                ctxfilter.fillStyle = filter_detail;
                ctx.fillRect(0, 0, 320 / pixel_h, 180 / pixel_w);
                ctx.globalCompositeOperation = "source-over";

                //console.log(all_step_count);



                if (all_step_count > 100) {
                    if (mama_end_text_flag == 0) {
                        drawtext(1, 10, "お母さん : ", 1);
                        stop_walk_flag = 1;
                        if (gyou_buf > 1) {
                            stop_walk_flag = 0;
                        }
                    } else {
                        stop_walk_flag = 0;
                    }
                }




            default:


                //ctx.drawImage(src_sky_ar[0], 10 / pixel_w,10/ pixel_h, 1000 / pixel_w, 1000 / pixel_h);
                //ctx.globalAlpha = 1;

                if (object3 != null) {
                    //console.log("きてる？");
                    ctx.drawImage(object3, object1_3_c_w, 0, 320 / pixel_w, 180 / pixel_h);
                    ctx.globalAlpha = 1;
                }

            //一番前
            //ctx.drawImage(phu_imgs_phu_array[1],20+add,20+add,100,100+add);
            //add=add+0.08;
        }


    }

}
