(function() {

    var fade = $(".fadein");
    var fadeIndex = -1;
    
    function showFade() {
        ++fadeIndex;
        fade.eq(fadeIndex % fade.length)
            .delay(8000)
            .fadeIn(1000)
            
    }
    
    showFade();
    
})();