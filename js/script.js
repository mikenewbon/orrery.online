var standardFontSize = .5;
window.addEventListener("wheel", function(e) {
    var scr = e.deltaY;

    if (scr > 0 && standardFontSize>=0.25){
        //upward
        standardFontSize-=0.01;
    }else if(standardFontSize<=2){
        //downward
        standardFontSize+=0.01;
    }
    document.getElementById("space").style.fontSize = standardFontSize+"em";
});