var touchX = 0;
var touchY = 0;

function setup_touchevent() {
    //画面をタッチされた時の座標を出力する
    var canvas = document.getElementById("canvas");

    canvas.addEventListener('click', function (e) {

        //e.offsetXはガチの「座標」なので、このゲーム内におけるpixel単位に戻す。
        //1マスあたりの高さがpixel_w

        touchX = e.offsetX * pixel_w;
        touchY = e.offsetY * pixel_h;

        console.log("クリックした座標X：" + touchX);
        console.log("クリックした座標Y：" + touchY);

    }, false);

    //console.log("no click");

}


function setup_touchevent() {
    //画面をタッチされた時の座標を出力する
    var canvas = document.getElementById("canvas");

    canvas.addEventListener('click', function (e) {

        //e.offsetXはガチの「座標」なので、このゲーム内におけるpixel単位に戻す。
        //1マスあたりの高さがpixel_w
        
        touchX = e.offsetX * pixel_w;
        touchY = e.offsetY * pixel_h;

        console.log("クリックした座標X：" + touchX);
        console.log("クリックした座標Y：" + touchY);

    }, false);

    //console.log("no click");

}

/*
keydown実装未
function setup_touchevent_key() {
    var canvas = document.getElementById("canvas");

    canvas.addEventListener('keydown', function (e) {
        console.log("aaaaaaaaa")
        console.log("キーコード" + e.keyCode);
    }, false);


    console.log("no click");
}*/