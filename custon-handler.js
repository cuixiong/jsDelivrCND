function isMobile(){
    let info = navigator.userAgent;
    let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    for(let i = 0; i < agents.length; i++){
        if(info.indexOf(agents[i]) >= 0) return true;
    }
    return false;
}

if(isMobile()){
    //var width = window.screen.width;
    var alwidth = window.screen.availWidth;
    var player_width = alwidth - 19;
    $("#player").css("max-width", player_width);
    $("#player").css("width", player_width);
    $(".aplayer-body").css("max-width", player_width);
    $(".aplayer-body").css("width", player_width);

    var list_width = document.documentElement.clientWidth;
    $(".aplayer-list").css("background", "white");
    $(".aplayer-list").css("max-width", list_width);
    $(".aplayer-list").css("width", list_width);

    /**
     *  由于aplayer-list已经超出父节点的宽度了, 所以超出的部分脱离文档流, 所以下滑页面会被其他覆盖. 要么改定位方式
     *  还有一种就是定义一个白色背景色 , 让用户察觉不到
     */

}