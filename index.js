function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)

    els.forEach(el => {addObserver(el, options)})
}

function addObserver(el, options){
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(options.cb) {
                    // If we've passed a callback function, we'll call it
                    options.cb(el)
                    else{
                        entry.target.classList.add('.scroll_trigger')
                        observer.unobserve(entry.target)
                    }
                }
            })
    })
    observer.observe(el)
}
