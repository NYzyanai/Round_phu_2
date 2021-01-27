round_phu.game=(function(){
    var dom = round_phu.dom
        $ = dom.$;
        //アクティブな画面がある場合にはかくす
        //指定されたIDを持つ画面を表示する
    
    function showScreen(screenId){
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if(activeScreen){
            dom.removeClass(screen,"active");
        }
        dom.addClass(screen,"active");
    }

    //公開メソッド
    return{
        showScreen :showScreen
    };
})();