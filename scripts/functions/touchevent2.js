var touchX = 0;
var touchY = 0;

function setup_touchevent() {
    //画面をタッチされた時の座標を出力する
    var canvas = document.getElementById("canvas");

    canvas.addEventListener('click', function (e) {

        //e.offsetXはガチの「座標」なので、このゲーム内におけるpixel単位に戻す。
        touchX = e.offsetX / pixel_w;
        touchY = e.offsetY / pixel_h;

        console.log("クリックした座標X：" + e.offsetX / pixel_w);
        console.log("クリックした座標Y：" + e.offsetY / pixel_h);

    }, false);

    //console.log("no click");

}