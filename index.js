// have functions that add classes that perform animations
import("jquery");

const gallery_items = document.getElementsByClassName('gallery_item');
console.log(gallery_items);

for (let i = 0; i < gallery_items.length; i++) {
    gallery_items[i].addEventListener("click", expand);
}

var lastScrollTop = $(window).scrollTop();

$(window).on('scroll', function() { 
    var s = $(this).scrollTop();
    opacityVal = (s / 240);
    lastScrollTop = s;
});
