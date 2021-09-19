
function splash_load_image(num) {
    splash_imgs[num] = new Image();
    splash_imgs[num].src = splash_imgs_path[num];
    console.log("loadしたよー");
    splash_load_flag = 1;
}

function splash_draw_image(num) {
    splash_imgs[num] = new Image();
    splash_imgs[num].src = splash_imgs_path[num];

    ///画像読込後にカウントアップ
    splash_imgs[num].onload = function () {
        splash_imgCount++
        console.log(splash_imgCount);


        if (splash_imgCount >= splash_imgs.length) {
            console.log("imgカウントは２");

            for (var i = 0; i < splash_imgs.length; i++) {
                if(i==0){
                ctx.drawImage(splash_imgs[i], 0, 0, canvas.width, canvas.height);
                }else if(i==1){
                    //Soundlogoの表示場所
                    ctx.drawImage(splash_imgs[i], 170/pixel_w, 160/pixel_h, 60/pixel_w, 20/pixel_h);
                }else if(i==2){
                    //infologoの表示場所
                    ctx.drawImage(splash_imgs[i], 260/pixel_w, 160/pixel_h, 40/pixel_w, 20/pixel_h);
                }
            }
        }
    }

}


///////////スタート押された時の処理
function start_btn() {
    fade_out();
    console.log("スタートするわよ！！！！！")
    if (after_fade_out() == true) {
        after_fade_out_flag = 0;
        start_btn_flag = 0;
        movie_stage_flag = 1;
        splashscreen_flag = 0;
    }

}

function readme_btn() {
    if (after_fade_out() == true) {
        after_fade_out_flag = 0;
        readme_imageDraw();
        readme_stage_flag = 1;
        splash_stage_flag = 0;
    } else {
        if (readme_finished_flag == 0) {
            fade_out();
        }
    }
}

var readme_finished_flag
readme_finished_flag = 0;


function readme_imageDraw() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    readme_img = new Image();
    readme_img.src = "src/fullscreen/readme20210919.png";

    //splashimageが詠み込まれたら描画する
    readme_img.onload = function () {
        sizing();
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(readme_img, 0, 0, canvas.width, canvas.height);
        readme_finished_flag = 1
    }
}