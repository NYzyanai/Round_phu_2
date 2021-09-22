function debag(touchX, touchY) {
    //デバッグモード実装
    if (touchX > 300 && touchY < 30) {
        debug_mode_flag = 1;
        speedup = 3;
    }

    if (touchX < 20 && touchY < 30 & touchX !== 0) {
        speedup = 0;
    }
}



function console_log() {
    a++
    if (a % 60 == 0) {
        //console.log(answer);
        /*console.log("【first_forest_r】" + first_forest_r);
        console.log("【step3】"  +  step3);
        console.log(step3>first_forest_r );
        console.log("【step3_max】"  + step3_max);
        console.log("【first_forest_l】"  + first_forest_l)
        console.log( step3_max>first_forest_l);*/

    }

}