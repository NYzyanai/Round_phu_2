
var canvas = document.getElementById('canvas');
var ctx

var splash_img
var sound_info

var splash_imgs_path = [
    'src/fullscreen/round_phu.png',
    'src/button/sound_info.png'
]

var splash_imgs = [];
var imgArr = [];
var splash_imgCount = 0;
var splash_load_flag
splash_load_flag = 0;


function splashscreen_imageDraw() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    //ドット絵をシャープにする
    ctx.imageSmoothingEnabled = false;
    for (var i = 0; i < splash_imgs_path.length; i++) {
        splash_draw_image(i);
    }
    splash_screen_called = 1;
}

////////


