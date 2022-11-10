$(function() {
    var element = $("span") //element that should be animated
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) { // if scrolled
            element.addClass("smoke_effect");
        }
        else {
            element.removeClass("smoke_effect");
        }
    });
})

