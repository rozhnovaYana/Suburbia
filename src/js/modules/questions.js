const questions=()=>{
    const items=document.querySelectorAll(".questions-item"),
    cross=document.querySelectorAll(".questions-item__cross")
    cross.forEach(i=>{
        i.addEventListener("click", (e)=>{
            cross.forEach(item=>{
                if(item!==e.target){
                    item.classList.remove("questions-item__cross_active")
                    const num=item.getAttribute('data-cross')-1
                    const descr=items[num].querySelector(".questions-item__descr")
                    descr.classList.remove("questions-item__descr_active")
                }}
                )
           i.classList.toggle("questions-item__cross_active")
           const num=i.getAttribute('data-cross')-1
           const descr=items[num].querySelector(".questions-item__descr")
           descr.classList.toggle("questions-item__descr_active")
        })
    })
}
export default questions;