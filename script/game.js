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
    //なんで「０」じゃないとだめなの？
    //Sizzleセレクタエンジンは、要素が一個とか０でも必ず配列で喋ってくるから必ず「０」
    //で1番目の配列を選ばないと行けない
    return{
        showScreen :showScreen
    };
})();