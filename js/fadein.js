(function() {

    var fade = $(".fadein");
    var fadeIndex = -1;
    
    function showFade() {
        ++fadeIndex;
        fade.eq(fadeIndex % fade.length)
            .fadeIn(6000)
            
    }
    
    showFade();
    
})();