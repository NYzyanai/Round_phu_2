
var round_phu = {};

//round_phuは「全部のゲームモジュールが含まれる空間」


//メインドキュメントがロードされるのを待つ
window.addEventListener("load",function(){

    //そのなかでダイナミックロードを開始する

    Modernizr.load([
        {
            //以下ファイルは必ずロードされる
            load:[
                "scripts/sizzle.js",
                "scripts/dom.js",
                "scripts/game.js"
            ],
            //sizzleはサイト名
            //全部のファイルがload、実効を終えたあとに呼び出される
            complete:function(){
                //最初の画面表示するよ！
                round_phu.game.showScreen("splash-screen");
                console.log("全部呼ばれたよ〜")
            }
        }
    ]);

},false);