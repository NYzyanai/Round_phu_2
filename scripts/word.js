

//fillText(text,x,y)
//


/*
二次元配列にしてみる？？？？


*/




var text_1="Guet:行き先もきまってないのに?WOWOならお得に映画を見て"
var text_2="Guet:... 行かないで。"
var text_3="Guet:私が頑張るから。"
var text_4="Guet:Phuは、まだやれるって。"
var text_5="Guet:まだ頑張れるって証明するから。"
var text_6="Guet:だから... 行かないで。"
var text_7="Guet:わかった？"
var text_8="Guet:...待ってるからね。"
var text_9="次のテキスト"
var text_10="終わりです"

var text_array=[];
var text_2nd_array=[];

text_2nd_array=[text_array];




//onsole.log("おれを診ろ"　& text_pre.substr(0,5))

var name_array=new Array;


for(var word_array_num=1;word_array_num<10;word_array_num++){
    name_array.name="text_" + word_array_num;
    //name_array=(Array.name=name_array);

    text_1="Guet:行き先もきまってないのに?WOWOならお得に映画を見て"
    text_2="Guet:... 行かないで。"
    text_3="Guet:私が頑張るから。"
    text_4="Guet:Phuは、まだやれるって。"
    text_5="Guet:まだ頑張れるって証明するから。"
    text_6="Guet:だから... 行かないで。"
    text_7="Guet:わかった？"
    text_8="Guet:...待ってるからね。"
    text_9="次のテキスト"
    text_10="終わりです"

    console.log(typeof(name_array));

    for (var text_c=0;text_c<name_array.name.length;text_c++){
        text_array[text_c]=name_array.substr(0,text_c+1);
        console.log(text_array[text_c]);
    }
}




var text1=[];

var text_time 
text_time=0;


text1=[

    "Guet:行き先もきまってないのに",

    "Guet:... 行かないで。",
    
    "Guet:私が頑張るから。",
    
    "Guet:Phuは、まだやれるって。",
    
    "Guet:まだ頑張れるって証明するから。",
    
    "Guet:だから... 行かないで。",
    
    "Guet:わかった？",
    
    "Guet:...待ってるからね。"
    

]


/*　文字草案


Guet:行き先もきまってないのに

Guet:... 行かないで。

Guet:私が頑張るから。

Guet:Yueが、まだやれるって。

Guet:まだ頑張れるって証明するから。

Guet:だから... 行かないで。

Guet:わかった？

Guet:...待ってるからね。


*/