function slider(
    {wrapper,
    container,
    oneSlide,
    prevArrow=false,
    nextArrow=false, 
    controlsSelector=false,
    indicators=false,
    bigWrapper=false,
    duration,
    length}) {
    const sliderWrapper = document.querySelector(wrapper),
        sliderScroll = document.querySelector(container),
        slides = document.querySelectorAll(oneSlide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        controls= document.querySelectorAll(controlsSelector)
    let width = 100/length
    let direction=1,
    slide=1,
    scroll, 
    dots=[],
    firstSlide=1;
    sliderScroll.style.width = 100 * slides.length + `%`;
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
                dot.style.background = "white";
            }
            dot.setAttribute("data-slide-to", i + 1);
        }
        dots.forEach((dot) => {
            dot.addEventListener("click", (e) => {
                const activeDot = e.target.getAttribute("data-slide-to");
                slide = +activeDot-firstSlide;
                console.log(slide)
                scroll = (slide - 1) * width;
                console.log(scroll)
                sliderScroll.style.transform = `translateX(-${scroll}%)`;
                dots.forEach((dot) => {
                    dot.style.background="inherit";
                });
                dot.style.background="white";

            });
        });
    }

    sliderScroll.addEventListener('transitionend', function() {
        // get the last element and append it to the front  
        if (direction === 1) {
          sliderScroll.prepend(sliderScroll.lastElementChild);
          if(firstSlide==0){
            firstSlide=length-1
          }else{
            firstSlide-=1
          }
        } else {
          sliderScroll.append(sliderScroll.firstElementChild);
          if(firstSlide==length-1){
              firstSlide=0
          }else{
            firstSlide+=1
          }
        }

        
        sliderScroll.style.transition = 'none';
        sliderScroll.style.transform = 'translate(0)';
        setTimeout(() => {
          sliderScroll.style.transition = 'all 0.5s';
        })
      }, false);

    function nextSlide(){
        sliderWrapper.style.justifyContent = 'flex-start';
        direction=-1
        scroll+=width
        if(indicators){
            dots.forEach((dot) => {
                dot.style.background="inherit"
            });
            dots[firstSlide].style.background="white"
        }
        sliderScroll.style.transform = `translateX(-${width}%)`;
    }
    function prevSlide(){
        if (direction === -1) {
            direction = 1;
            sliderScroll.appendChild(sliderScroll.firstElementChild);
            if(firstSlide==0){
                firstSlide=length-1
              }else{
                firstSlide-=1
              }
        }
        sliderWrapper.style.justifyContent = 'flex-end';  
        scroll-=width
        sliderScroll.style.transform = `translateX(${width}%)`;
    }
    let interval=setInterval(()=>nextSlide(), duration)
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