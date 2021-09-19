height=180;
width=320;

var filter;

//呼ばれてる？
/*
function sizing_filter(){
    screen_width=document.getElementById("wrapper").clientWidth;
    screen_height=document.getElementById("wrapper").clientHeight;
    filter=document.getElementById("filter");


    if (screen_width*9/16<screen_height){
            //幅に合わせる
        filter.width=screen_width;
        filter.height=screen_width*9/16;
        
        filter.style.left = (screen_width-filter.width)/2+"px";
        filter.style.top = (screen_height-filter.height)/2+"px";

        fontsize="4vw'DotGothic16'";

    }else if(screen_width*9/16==screen_height){
        //もしも横ながだった場合には、heightをscreenに合わせる必要がある
        filter.height=screen_height;
        filter.width=screen_width;

        fontsize="4vw 'DotGothic16'";
        
    }else if(screen_width*9/16>screen_height){
        //高さにあわせる
        filter.height=screen_height;
        filter.width=screen_height*16/9;

        filter.style.left = (screen_width-filter.width)/2+"px";
        filter.style.top = (screen_height-filter.height)/2+"px";

        fontsize="5.2vh 'DotGothic16'";
    }  

    rate_screen_h=180/filter.height;
    rate_screen_w=320/filter.width;

    console.log(rate_screen_h);
    console.log(rate_screen_w);

    pixel_h=filter.height/180;
    pixel_w=filter.width/320;

    

}


*/