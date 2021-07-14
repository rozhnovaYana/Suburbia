const hiddingSlider=({bigWrapper, slideSelector, sliderSelector})=>{
    const slider = document.querySelector(bigWrapper),
        slides=document.querySelectorAll(slideSelector),
        carousel=document.querySelector(sliderSelector),
        dotWrapper = document.createElement("ul");
        dotWrapper.classList.add("carousel-indicators");
        slider.style.position = "relative";
        slider.append(dotWrapper);

    let dots=[],
    slideIndex=1;
    slides[slideIndex-1].classList.add("review-slide_active")
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dotWrapper.append(dot);
        dot.classList.add("dot");
        dots.push(dot);
        if (i == 0) {
            dot.style.background = "white";
        }
        dot.setAttribute("data-slide-to", i + 1);
    }
    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            slideIndex=dot.getAttribute('data-slide-to')
            dots.forEach((dot) => {
                dot.style.background="inherit";
            });
            dot.style.background="white";
            slides.forEach(i=>i.classList.remove("review-slide_active"))
            slides[slideIndex-1].classList.add("review-slide_active")

        });
    });
    function nextSlide(){
        if(slideIndex==slides.length){
            slideIndex=1
        }else{
            ++slideIndex
        }
        dots.forEach((dot) => {
            dot.style.background="inherit";
        });
        dots[slideIndex-1].style.background="white"
        slides.forEach(i=>{
            i.classList.remove("review-slide_active")
        })
        slides[slideIndex-1].classList.add("review-slide_active")
    }
  
    let interval=setInterval(()=>{
        nextSlide()
    }, 10000)
    dots.forEach(i=>{
        i.addEventListener("mouseleave", () => {
            interval=setInterval(()=>nextSlide(), 10000)
        });
        i.addEventListener("mouseenter", () => {
            clearInterval(interval)
        });
    })
        
        
}
export default hiddingSlider;