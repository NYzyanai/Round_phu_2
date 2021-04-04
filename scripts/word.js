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
    "Guet:行き先もきまってないのに",
    "Guet:... 行かないで。",
    "Guet:私が頑張るから。",
    "Guet:Phuは、まだやれるって。",
    "Guet:まだ頑張れるって証明するから。",
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

