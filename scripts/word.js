/*

使い方メモ
text_array に台詞を入れて行きます
text_detail_array に分割された台詞が格納されます
text_array分の長さの「text_datail_array」の一次元配列をつくります

その配列のなかに「text_array[0]とかのテキストを1文字づつ分割して入力していきます…１
コレをtext_array.lengthぶん繰り返します…２

word_bufには「text_array」などの文字をいったんぶち込んで、
その文字数文１を繰り返します

drawtext(表示したいテキストの行数開始,最後に表示したいテキストの行数,だれがしゃべってるか)
*/
var text_array = [];

text_array = [
    "************",
    "どこ行くの？",
    " ",
    "こんな時間に...",
    ".......",

    "...Phu?",
    " ",
    "手伝わなくて　大丈夫？",
    " ",
    "大丈夫なら　いいけど。",
    ".......",

    ".......怒られないの？",
    "　",
    ".....いいなぁ",
    " ",
    "どこにでも　行けるんだね",

    "行くところ、決まってるの？",
    " ",
    "決まってないの？",
    "ねえ",
    "無視しないでよ",

    " ",
    "おねがい",
    "連れていってよ"

]

var text_detail_array = new Array(text_array.length);

for (var i = 0; i < text_detail_array.length; i++) {
    text_detail_array[i] = new Array
}
var array_count = 0
var word_buf = 0

for (array_count = 0; array_count < text_array.length; array_count++) {
    word_buf = text_array[array_count]


    for (var text_c = 0; text_c < word_buf.length; text_c++) {
        text_detail_array[array_count][text_c] = text_array[array_count].substr(0, text_c + 1);
        //console.log(text_array[text_c]);
    }
}

//文字が出る時だけ画面を上におしあげたい
var upper_gamen = 0
var text_flag = 0
var text_move_flag
text_move_flag = 0
var gyou_count

var buf_retu
buf_retu = 0;
var chara_name;
var max_retu;
var wait_text_count;
wait_text_count = 0;
var start_gyou_count;
var end_gyou_count;
start_gyou_count = 0;
var next_text_flag
var gyou_buf = "" //いまどこの列を呼んでいるかの変数

function drawtext(start_gyou_count, end_gyou_count, chara_name, text_number) {

    if (gyou_buf == "") {
        gyou_buf = start_gyou_count
        text_move_flag = 1;
    } else if (gyou_buf == end_gyou_count && retu_count == max_retu && wait_text_count > 65 - speedup * 20) {
        text_move_flag = 2;
    } else if (upper_gamen >= 30) {

        //背景Draw
        ctx.fillStyle = 'black';
        ctx.fillRect(0, (180 - upper_gamen) / pixel_h, 320 / pixel_w, 30 / pixel_h);

        //文字指定
        ctx.font = fontsize;
        ctx.fillStyle = 'white';

        //該当行の最大値を格納
        max_retu = text_detail_array[gyou_buf].length - 1

        //秒数管理、7回表示したらつぎのもじ
        if (wait_text_count >= 1.3) {
            if (retu_count < max_retu) {
                retu_count = retu_count + 1;
                wait_text_count = 0
                sf_play_text();
                //最後の文字だけは60まつ
            } else if (retu_count == max_retu && wait_text_count > 65 - speedup * 20) {
                gyou_buf = gyou_buf + 1;
                retu_count = 0;
                wait_text_count = 0
               
            }

            //console.log(ここで文字の音を出す？)
            

        }

        if (retu_count < max_retu) {
            //console.log("行数"+ gyou_count, "列数" + retu_count);
            ctx.fillText((chara_name) + text_detail_array[gyou_buf][retu_count], 15 / pixel_w, 165 / pixel_h);
            wait_text_count = wait_text_count + 1;
            //play_text();
        } else {
            ctx.fillText((chara_name) + text_detail_array[gyou_buf][retu_count], 15 / pixel_w, 165 / pixel_h);
            wait_text_count = wait_text_count + 1;
            
        }
    }


    if (text_move_flag == 1) {
        if (upper_gamen < 30) {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, (180 - upper_gamen) / pixel_h, 320 / pixel_w, 30 / pixel_h);
            upper_gamen = upper_gamen + 0.6 + speedup;
        } else {
            text_move_flag = 0;
            text_flag = 1;
            //もう表示していいよーってこと
        }
    } else if (text_move_flag == 2) {
        text_flag = 0
        if (upper_gamen > 0) {
            ctx.fillStyle = 'black';
            upper_gamen = upper_gamen - 0.5 - speedup;
            ctx.fillRect(0, (180 - upper_gamen) / pixel_h, 320 / pixel_w, 30 / pixel_h);

        } else {
            text_move_flag = 0;
            wait_text_count = 0;
            gyou_buf = 0;
            retu_count = 0;
            if (text_number == 1) {
                mama_end_text_flag = 1;
            } else if (text_number == 2) {
                ghost_end_text_flag = 1;
            }
        }
    }
}

function endtext() {
    text_move_flag = 2;
    text_flag = 0;
    if (upper_gamen > 0) {
        upper_gamen = upper_gamen - 1
        ctx.fillStyle = 'black';
        ctx.fillRect(0, (180 - upper_gamen) / pixel_h, 320 / pixel_w, upper_gamen / pixel_h);
    } else {
        text_move_flag = 0;
        wait_text_count = 0;
        gyou_buf = 0;
        retu_count = 0;
        if (text_number == 1) {
            mama_end_text_flag = 1;
        } else if (text_number == 2) {
            ghost_end_text_flag = 1;
        }
    }
}

var mama_end_text_flag = 0;
var ghost_end_text_flag = 0;
var text_number

/*function text_audio() {

    var text_audio = document.querySelector(".text_audio");
    console.log(document.querySelector('.text_audio'));
    console.log(text_audio);
    console.log(text_audio.volume); // 1
    text_audio.volume = 0.15;
    text_audio.play();
}*/