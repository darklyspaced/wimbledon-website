// have functions that add classes that perform animations

const gallery_items = document.getElementsByClassName('gallery_item');
console.log(gallery_items.length);
for (let i = 0; i < gallery_items.length; i++) {
    gallery_items[i].addEventListener("click", expand);
    console.log("test");
}

function expand(){
    console.log("test");
};
