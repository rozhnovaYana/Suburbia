const video=()=>{
    const videoPlay=document.querySelector(".about-video__control"),
    video=document.querySelector(".about-video video")
    videoPlay.addEventListener("click", (e)=>{
        video.play()
        videoPlay.style.visibility="hidden"
    })
    video.addEventListener("pause", ()=>{
        videoPlay.style.visibility="visible"
    })
    video.addEventListener("play", ()=>{
        videoPlay.style.visibility="hidden"
    })
}
export default video;