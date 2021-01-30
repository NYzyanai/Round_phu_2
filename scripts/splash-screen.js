var height;
var width;
var screen_height;
var screen_width;

height=90;
width=160;

function imageDraw(){
    var cvs = document.getElementById('Round_phu');
    var ctx=cvs.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    var splash_img =new Image();
    splash_img.src= "src/fullscreen/round_phu.png";

    splash_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(splash_img,0,0,screen_width,screen_height);
    }
}

function sizing(){
	screen_width = document.getElementById("wrapper").clientWidth;
	screen_height = screen_width * (height / width);
	var c = document.getElementById("Round_phu");
	c.width = screen_width;
	c.height = screen_height;
	dw = screen_width / width;
	dh = screen_height / height;
}
