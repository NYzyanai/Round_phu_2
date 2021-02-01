function movie_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    /*ctx contextって何？呪文？お決まりの呪文*/

    movie_img =new Image();
    movie_img.src="src/animal_marmot_white_brown.png"

        //splashimageが詠み込まれたら描画する
    movie_img.onload = function(){
        sizing();
        ctx.imageSmoothingEnabled=false;
        ctx.drawImage(movie_img,0,0,canvas.width,canvas.height);
    }


}