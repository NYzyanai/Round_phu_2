

/*domモジュールってなに？DOM内の要素を探すのを非常に楽にする。DOMをさがすのに役立つヘルパー的関数を提供する。*/
/*そもそもsizzleってなんなん？jqueryのなかの要素らしい*/


round_phu.dom=(function(){
    var $ Sizzle;
    
    function hasClass(el,clsName){
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        return regux.test(el.className);
    }

    function addClass(el,clsName){
        if(!hasClass(el,clsName)){
            el.className+=" "+ clsName;
        }
    }

    function removeClass(el,clsName){
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        el.className=el.className.replace(regex," ");
    }

    return{
        $ : $,
        hasClass:hasClass
        addClass:addClass
        removeClass:removeClass
    };
})();