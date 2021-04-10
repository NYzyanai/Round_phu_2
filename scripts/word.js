/*

使い方メモ
text_array に台詞を入れて行きます
text_detail_array に分割された台詞が格納されます
text_array分の長さの「text_datail_array」の一次元配列をつくります


    その配列のなかに「text_array[0]とかのテキストを1文字づつ分割して入力していきます…１
コレをtext_array.lengthぶん繰り返します…２

word_bufには「text_array」などの文字をいったんぶち込んで、
その文字数文１を繰り返します


*/
var text_array=[];

text_array=[
    "ここがPhuのお家？",
    "Yue:大きいね！",
    "Yue:.......",
    "Yue:...Phu?",
    "Yue:どうしたの？",
    "Guet:だから... 行かないで。",
    "Guet:わかった？",
    "Guet:...待ってるからね。"
]

var text_detail_array=new Array(text_array.length);

for(var i=0;i<text_detail_array.length;i++){
    text_detail_array[i]=new Array
}
var array_count=0
var word_buf =0

for(array_count=0;array_count<text_array.length;array_count++){
    word_buf=text_array[array_count]


    for (var text_c=0;text_c<word_buf.length;text_c++){
        text_detail_array[array_count][text_c]=text_array[array_count].substr(0,text_c+1);
        //console.log(text_array[text_c]);
    }
}




//文字が出る時だけ画面を上におしあげたい

var upper_gamen=0
var text_flag=0
var text_move_flag
text_move_flag=0
var gyou_count

var buf_retu
buf_retu=0;
var chara_name;
var max_retu;
var wait_text_count;
wait_text_count=0;
var start_gyou_count;
var end_gyou_count;
start_gyou_count=0;
var next_text_flag

function drawtext(gyou_count,chara_name){
    text_move_flag=1;
    if(text_flag=1){
        text_time=text_time+0.2

        //背景Draw
        ctx.fillStyle='black';
        ctx.fillRect(0, (180-upper_gamen)*cell_h,320*cell_w,30*cell_h);
        
        //文字指定
        ctx.font = fontsize;
        ctx.fillStyle='white';


        max_retu=text_detail_array[gyou_count].length

        if(wait_text_count==7){
            if(retu_count<max_retu-1){
                retu_count=retu_count+1;
                next_text_flag=0;
            }else if(retu_count==max_retu-1){
                next_text_flag=1;
            }
            wait_text_count=0
        }

        if(retu_count<max_retu){
            console.log("行数"+ gyou_count, "列数" + retu_count);
            ctx.fillText((chara_name) + text_detail_array[gyou_count][retu_count], 15*cell_w, 165*cell_h);
            wait_text_count=wait_text_count+1;
        }else{
            ctx.fillText((chara_name) + text_detail_array[gyou_count][retu_count], 15*cell_w, 165*cell_h);
                wait_text_count=wait_text_count+1;
        }
                /*if(text_detail_array[gyou_count][retu_count]==null){
                    gyou_count=gyou_count+1;
                    text_time=0;
                }else{
                    ctx.fillText((chara_name) + text_detail_array[gyou_count][retu_count], 15*cell_w, 165*cell_h);
                }*/


    //1の時・・・上がらせる
    //2の時・・・下がらせる

    if(text_move_flag=1){
        if(upper_gamen<30){
            upper_gamen=upper_gamen+1
        }else{
            text_move_flag=0;
            text_flag=1;
            //もう表示していいよーってこと
        }
    }else if(text_move_flag=2){
            text_flag=0
        if(upper_gamen>0){
            upper_gamen=upper_gamen-1
        }else{
            text_move_flag=0;
        }
    }
}



}

function endtext(){
    text_move_flag=2;
    text_flag=0;
    if(upper_gamen>0){
        upper_gamen=upper_gamen-1
        ctx.fillStyle='black';
        ctx.fillRect(0, (180-upper_gamen)*cell_h,320*cell_w,upper_gamen*cell_h);
    }else{
        text_move_flag=0;
    }
}


/*function drawtext(gyou_count){
    text_move_flag=1;
    if(text_flag=1){
        text_time=text_time+0.2

        背景Draw
        ctx.fillStyle='black';
        ctx.fillRect(0, (180-upper_gamen)*cell_h,320*cell_w,30*cell_h);
        
        
        ctx.font = fontsize;
        ctx.fillStyle='white';
        if(text_time==0){
            retu_count=0;
        }else{
            retu_count=Math.floor(text_time);
        }

        if(gyou_count+1>=text_array.length){ TEXT_ARRAYの長さ以上の配列は存在しない

                console.log("うんち")
        }else{
            if(text_detail_array[gyou_count][retu_count]==null){
                gyou_count=gyou_count+1;
                text_time=0;
            }
                ctx.fillText(text_detail_array[gyou_count][retu_count], 15*cell_w, 165*cell_h);
        }
    }

    1の時・・・上がらせる
    2の時・・・下がらせる

    if(text_move_flag=1){
        if(upper_gamen<30){
            upper_gamen=upper_gamen+1
        }else{
            text_move_flag=0;
            text_flag=1;
            もう表示していいよーってこと
        }
    }else if(text_move_flag=2){
            text_flag=0
        if(upper_gamen>0){
            upper_gamen=upper_gamen-1
        }else{
            text_move_flag=0;
        }
    }
}*/
