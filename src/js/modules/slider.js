function slider(
    {wrapper,
    container,
    oneSlide,
    prevArrow=false,
    nextArrow=false, 
    controlsSelector=false,
    indicators=false,
    bigWrapper=false}) {
    const sliderWrapper = document.querySelector(wrapper),
        sliderScroll = document.querySelector(container),
        slides = document.querySelectorAll(oneSlide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        controls= document.querySelectorAll(controlsSelector)
    let width = window.getComputedStyle(sliderWrapper).width;
    width = Math.floor(width.slice(0, width.length - 2));
    let scroll = 0,
    slide=1,
    dots=[];
    sliderScroll.style.width = 100 * slides.length + `%`;
    slides.forEach((slide) => {
        slide.style.width = width;
    });
    if(indicators){
        const slider = document.querySelector(bigWrapper),
        dotWrapper = document.createElement("ul");
        dotWrapper.classList.add("carousel-indicators");
        slider.style.position = "relative";
        slider.append(dotWrapper);
        
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("li");
            dotWrapper.append(dot);
            dot.classList.add("dot");
            dots.push(dot);
            if (i == 0) {
                dot.style.opacity = "1";
            }
            dot.setAttribute("data-slide-to", i + 1);
        }
        dots.forEach((dot) => {
            dot.addEventListener("click", (e) => {
                const activeDot = e.target.getAttribute("data-slide-to");
                slide = +activeDot;
                scroll = (activeDot - 1) * width;
                sliderScroll.style.transform = `translateX(-${scroll}px)`;
                dots.forEach((dot) => {
                    dot.style.opacity = "0.5";
                });
                dot.style.opacity = "1";

            });
        });
    }

    

    let maxScroll = (slides.length - 1) * width;
    function nextSlide(){
        if (scroll == maxScroll) {
            scroll = 0;
        } else {
            scroll += width;
        }
        if (slide == slides.length) {
            slide = 1;
        } else {
            slide += 1;
        }
        if(indicators){
            dots.forEach((dot) => {
                dot.style.opacity = "0.5";
            });
            dots[slide - 1].style.opacity = "1";
        }
        sliderScroll.style.transform = `translateX(-${scroll}px)`;
    }
    function prevSlide(){
        if (scroll == 0) {
            scroll = maxScroll;
        } else {
            scroll -= width;
        }
        if (slide == 1) {
            slide = slides.length;
        } else {
            slide -= 1;
        }
        sliderScroll.style.transform = `translateX(-${scroll}px)`;
    }
    let interval=setInterval(()=>nextSlide(), 3000)
    try{
        next.addEventListener("click", () => {
            nextSlide()
        });
    
        prev.addEventListener("click", () => {
            prevSlide()
        });
        controls.forEach(i=>{
            i.addEventListener("mouseleave", () => {
                interval=setInterval(()=>nextSlide(), 3000)
            });
            i.addEventListener("mouseenter", () => {
                clearInterval(interval)
            });
        })
    }catch{}
    

}
export default slider;