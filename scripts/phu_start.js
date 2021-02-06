var start_movie_flag
start_movie_flag=0;

/*ctx contextって何？呪文？お決まりの呪文*/



function movie_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
        //splashimageが詠み込まれたら描画する
        var movie_img =new Image();
        movie_img.src="src/animal_marmot_white_brown.png"
        movie_img.onload = function(){
        start_movie_flag=1;

        after_fade_out_flag=0;ß
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(movie_img,0,0,canvas.width,canvas.height);
    }

}