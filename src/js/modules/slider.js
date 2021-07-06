function slider(
    wrapper,
    container,
    oneSlide,
    prevArrow,
    nextArrow, 
    controlsSelector) {
    const sliderWrapper = document.querySelector(wrapper),
        sliderScroll = document.querySelector(container),
        slides = document.querySelectorAll(oneSlide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        controls= document.querySelectorAll(controlsSelector)
    let width = window.getComputedStyle(sliderWrapper).width;
    width = Math.floor(width.slice(0, width.length - 2));
    let scroll = 0;
    sliderScroll.style.width = 100 * slides.length + `%`;
    slides.forEach((slide) => {
        slide.style.width = width;
    });

    let maxScroll = (slides.length - 1) * width;
    function nextSlide(){
        if (scroll == maxScroll) {
            scroll = 0;
        } else {
            scroll += width;
        }
        sliderScroll.style.transform = `translateX(-${scroll}px)`;
    }
    function prevSlide(){
        if (scroll == 0) {
            scroll = maxScroll;
        } else {
            scroll -= width;
        }
        sliderScroll.style.transform = `translateX(-${scroll}px)`;
    }
    next.addEventListener("click", () => {
        nextSlide()
    });

    prev.addEventListener("click", () => {
        prevSlide()
    });
    let interval=setInterval(()=>nextSlide(), 3000)
    controls.forEach(i=>{
        i.addEventListener("mouseleave", () => {
            interval=setInterval(()=>nextSlide(), 3000)
        });
        i.addEventListener("mouseenter", () => {
            clearInterval(interval)
        });
    })

}
export default slider;