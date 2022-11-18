// have functions that add classes that perform animations
import("jquery");

const gallery_items = document.getElementsByClassName('gallery_item');
console.log(gallery_items);

for (let i = 0; i < gallery_items.length; i++) {
    gallery_items[i].addEventListener("click", expand);
}

$(window).on('scroll', function() {
    var s = $(window).scrollTop; //set current position to the top
    opacityVal = (s / 240); //denominator changes how fast it blurs || bigger is slower blur
    $('.blur').css('opacity', opacityVal);
}); 
