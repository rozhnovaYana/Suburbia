function slider(
    {wrapper,
    container,
    oneSlide,
    prevArrow=false,
    nextArrow=false, 
    controlsSelector=false,
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
    firstSlide=1;
    sliderScroll.style.width = 100 * slides.length + `%`;
  

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
          sliderScroll.style.transition = 'all 3s';
        })
      }, false);

    function nextSlide(){
        sliderWrapper.style.justifyContent = 'flex-start';
        direction=-1
        scroll+=width
        sliderScroll.style.transform = `translateX(-${width}%)`;
    }
    function prevSlide(){
        sliderWrapper.style.justifyContent = 'flex-end';  
        scroll-=width
        sliderScroll.style.transform = `translateX(${width}%)`;
    }
    let interval=setInterval(()=>nextSlide(), duration)
    next.addEventListener("click", () => {
        nextSlide()
    });

    prev.addEventListener("click", () => {
        prevSlide()
    });
    controls.forEach(i=>{
        i.addEventListener("mouseleave", () => {
            interval=setInterval(()=>nextSlide(), duration)
        });
        i.addEventListener("mouseenter", () => {
            clearInterval(interval)
        });
    })
    
    

}
export default slider;