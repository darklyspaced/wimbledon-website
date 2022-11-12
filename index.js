const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.intersectionRatio > 0) {
            console.log("tesafkdjsalkfjdsal;kjfkds:w")
            entry.classList.add('show');
        }
    })
});

hiddenElements.forEach(el => {
    observer.observe(el);
})
