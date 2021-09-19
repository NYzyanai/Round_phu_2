//これ何？
function openWindow(url, windowName) {
    info = 'toolbar=no,location=no,directories=no,status=no,menubar=no,' +
        'scrollbars=yes,left=0,top=0,resizable=yes,width=1014,height=740,title=no';
    var window1 = window.open(url, windowName, info);
    window1.moveTo(0, 0);
    window.opener = self;
    window.close();
}



//キャンバスは180マス×320マス
height = 180;
width = 320;

/////////クライアントにあわせたキャンバスの表示設定//////////
var screen_height;
var screen_width;
var canvas;
var fontsize;
var height; //どこで呼ばれてる？
var width;　//どこで呼ばれてる？

/////////////////////////////////////////////////////////
function sizing() {

    //クライアントのWidthを取得
    screen_width = document.getElementById("wrapper").clientWidth;
    //クライアントのheightを取得
    screen_height = document.getElementById("wrapper").clientHeight;
    //canvasを指定
    canvas = document.getElementById("canvas");

    //もし、縦長の画面だったら…
    if (screen_width * 180 / 320 < screen_height) {

        //canvasのwidrth=クライアントのwidth
        canvas.width = screen_width;
        //canvasのheight=クライアントのheight
        canvas.height = screen_width * 180 / 320;

        //もしも横長～ピッタリならいったん高さに合わせる
    } else {
        canvas.height = screen_height;
        canvas.width = screen_height * 16 / 9;
    }


    //中央寄せ
    canvas.style.left = (screen_width - canvas.width) / 2 + "px";
    canvas.style.top = (screen_height - canvas.height) / 2 + "px";

    //フォントサイズ指定
    fontsize = "4vw'DotGothic16'";

    //1マスあたりの高さ
    pixel_h = 180 / canvas.height;
    console.log(pixel_h);
    pixel_w = 320 / canvas.width;

}




//////////描画関連の関数///////

//////////////////////////////
function fade_in() {
    let opacity = 0;

    do {
        opacity += 0.0001;
        //console.log(opacity);
        //黒いもので重ね塗りしていく
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,0,0,opacity)";

    } while (opacity < 1.1);

    //塗り終わったら「塗り終わったで」返す
}

//待ってこれ使って無くない？
function fade_out() {
    opacity = opacity + 0.03;
    //console.log(opacity);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var after_fade_out_flag;
after_fade_out_flag = 0;


//after_fade_outはどこで呼ばれる？
function after_fade_out() {
    if (after_fade_out_flag == 0) {
        if (opacity > 1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            opacity = 0;
            return true;
            after_fade_out_flag = 1;
        }
    }

    return false;
}

////////
