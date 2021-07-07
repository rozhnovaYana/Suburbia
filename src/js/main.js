import slider from "./modules/slider"
import video from "./modules/video"
import questions from "./modules/questions"
document.addEventListener("DOMContentLoaded", ()=>{
    slider({
        wrapper:".works-slider",
        container:".works-slider__wrapper",
        oneSlide:".works-slide", 
        prevArrow:".works-slider__controls .left",
        nextArrow:".works-slider__controls .right",
        controlsSelector:".works-slider__controls"
    })
    slider({
            wrapper:".review-slider",
            container:".review-slider__wrapper",
            oneSlide:".review-slide", 
            indicators:true,
            bigWrapper:".review"
        })
    video()
    questions()
})