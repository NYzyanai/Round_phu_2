/*


function movie_imageDraw(){
    canvas = document.getElementById('canvas');  
    ctx=canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;
    for (var i =0;i<splash_imgs_path.length;i++){
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

function draw_image(num){
    splash_imgs[num]=new Image();
    splash_imgs[num].src=splash_imgs_path[num];
    console.log("ここまでは来てる");

    ///画像読込後にカウントアップ
    splash_imgs[num].onload=function(){
        imgCount++
        console.log(imgCount);


    if(imgCount>=splash_imgs.length){
            console.log("imgカウントは２");

        for (var i=0;i<splash_imgs.length;i++){                
            ctx.drawImage(splash_imgs[i],0,0,canvas.width,canvas.height);
        }   
    }        
}

}
*/ß