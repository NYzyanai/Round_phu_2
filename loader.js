var round_phu = {};

//round_phuは「全部のゲームモジュールが含まれる空間」


//メインドキュメントがロードされるのを待つ
window.addEventListener("load",function(){

    //そのなかでダイナミックロードを開始する

    modernizer.load([
        {
            //以下ファイルは必ずロードされる
            load:[
                "scripts/sizzle.js",
                "scripts/js",
                "scripts/game.js"
            ],
            //sizzleはサイト名
            //全部のファイルがload、実効を終えたあとに呼び出される
            complete:function(){
                //console.log("全部呼ばれたよ〜")
            }
        }
    ]);

},false);