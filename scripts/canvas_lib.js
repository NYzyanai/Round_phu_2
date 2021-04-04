var height;
var width;
var screen_height;
var screen_width;

var rate_screen_h;
var rate_screen_w;

height=180;
width=320;

var canvas



function openWindow(url,windowName){
    info = 'toolbar=no,location=no,directories=no,status=no,menubar=no,' +
     'scrollbars=yes,left=0,top=0,resizable=yes,width=1014,height=740,title=no';
    var window1 = window.open(url,windowName,info);
    window1.moveTo(0, 0);
    window.opener = self;
    window.close();
}

/////////クライアントにあわせたキャンバスの表示設定//////////
function sizing(){
    screen_width=document.getElementById("wrapper").clientWidth;
    screen_height=document.getElementById("wrapper").clientHeight;
     canvas=document.getElementById("canvas");


    if (screen_width*9/16<screen_height){
            //幅に合わせる
        canvas.width=screen_width;
        canvas.height=screen_width*9/16;
        
        canvas.style.left = (screen_width-canvas.width)/2+"px";
        canvas.style.top = (screen_height-canvas.height)/2+"px";
    }else if(screen_width*9/16==screen_height){
        //もしも横ながだった場合には、heightをscreenに合わせる必要がある
        canvas.height=screen_height;
        canvas.width=screen_width;
        
    }else if(screen_width*9/16>screen_height){
        //高さにあわせる
        canvas.height=screen_height;
        canvas.width=screen_height*16/9;

        canvas.style.left = (screen_width-canvas.width)/2+"px";
        canvas.style.top = (screen_height-canvas.height)/2+"px";
    }  

    rate_screen_h=180/canvas.height;
    rate_screen_w=320/canvas.width;

    console.log(rate_screen_h);
    console.log(rate_screen_w);

    cell_h=canvas.height/180;
    cell_w=canvas.width/320;

    

}

var cell_h
var cell_w


//////////描画関連の関数///////
function fade_in(){
    let opacity= 0;
    do {
    opacity += 0.0001;
    console.log(opacity);
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="rgba(0,0,0,opacity)";
    } while (opacity < 1.1);
}

function fade_out(){
    opacity =opacity +0.03;
    //console.log(opacity);
    ctx.globalAlpha=opacity;
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
var after_fade_out_flag;
after_fade_out_flag=0;

function after_fade_out(){
    if(after_fade_out_flag==0){
    if (opacity>1){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        opacity=0;
        return true;
        after_fade_out_flag=1;
    }
    }

    return false;
}

////////
