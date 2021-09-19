function debag(touchX,touchY){
    //デバッグモード実装
if (touchX > 300 && touchY < 30) {
    debug_mode_flag = 1;
    speedup = 3;
}

if (touchX < 20 && touchY < 30 & touchX !== 0) {
    speedup = 0;
}
}