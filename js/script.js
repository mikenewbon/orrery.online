$(document).ready(function(){

    $(window).bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta / 120 > 0) {
            changeZoom(1);
        } else {
            changeZoom(-1);
        }
    });

})

function changeZoom($int) {
    $('#space').css('font-size', parseInt($('#space').css('font-size')) + $int);
    console.log(parseInt($('#space').css('font-size')));
}