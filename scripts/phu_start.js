console.log("1a")

var phu_stage_flag_before
phu_stage_flag_before=0;


var phu_imgs=[];
var phu_imgs_path=[];

phu_imgs_path=[
    'src/animal_marmot_white_brown.png'
]

/*

function phu_imageDraw(){

    //console.log("movie_imageDrawが呼ばれた")
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

        for (var i =0;i<phu_imgs_path.length;i++){
            phu_load_image(i);
            phu_draw_image(i);
        }

}

function phu_load_image(num){
    console.log("load_imageがよばれた")
    phu_imgs[num]=new Image();
    phu_imgs[num].src=movie_imgs_path[num];
    //console.log("loadしたよー");
}



function movie_draw_image(num){
    ///画像読込後にカウントアップ

    /*
    phu_imgs[num].onload=function(){
        phu_imgCount++
        console.log("今movie_countは" + movie_imgCount);
    }

}
*/