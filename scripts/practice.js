var movie_imgs_path=[
    'src/movie/b_phu1.png',
    'src/movie/b_phu2.png',
    'src/movie/b_phu3.png',
    'src/movie/b_phu4.png',
    'src/movie/b_phu5.png',
    'src/movie/b_phu6.png',
    'src/movie/b_phu7.png',
    'src/movie/b_phu8.png',
    'src/movie/b_phu9.png',
    'src/movie/b_phu10.png',
    'src/movie/b_phu11.png',
    'src/movie/b_phu12.png'
]


var movie_imgs=[];
imgCount=0;
load_flag=0;

//別のところで０いれておかないといけない気がする


function movie_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
    for (var i =0;i<movie_imgs.length;i++){
            draw_image(i);
    }
    movie_image_called=1;
    "描かれたよ！"
}

function load_image(num){
    splash_imgs[num]=new Image();
    splash_imgs[num].src=splash_imgs_path[num];
    console.log("loadしたよー");
    load_flag=1;
}