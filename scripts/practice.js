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


var imgs = [
	'dog.jpg',
	'cat.jpg',
	'dolphin.jpg',
	'bird.jpg',
	'turtle.jpg'
];
var imgArr = [];
var imgCount = 0;
var canvas = document.getElementById('canvas');
var ctx;
window.onload = function() {
	if(!canvas || !canvas.getContext) return false;
	ctx = canvas.getContext('2d');
	draw();
}

// canvasに画像を描画
function draw() {
	for (var i = 0; i < imgs.length; i++) {
		draw_image(i);
	}
}

// 各画像をcanvasに描画する処理
function draw_image(num) {
	imgArr[num] = new Image();
	imgArr[num].src = imgs[num];
	// 画像読み込み後にカウントアップ
	imgArr[num].onload = function() {
		imgCount++;
		// すべての画像読み込みが完了した時
		if(imgCount >= imgs.length) {
			// 各画像を順番に描画
			for (var i = 0; i < imgs.length; i++) {
				ctx.drawImage(imgArr[i], (i * 80), (i * 40));
			}
		}
	}
}