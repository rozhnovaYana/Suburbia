const questions=()=>{
    const items=document.querySelectorAll(".questions-item"),
    cross=document.querySelectorAll(".questions-item__cross")
    let active;
    cross.forEach((i, num)=>{
        i.addEventListener("click", (e)=>{
            console.log(e.target)
            cross.forEach(item=>{
                if(item!==e.target){
                    console.log("f")
                    item.classList.remove("questions-item__cross_active")
                    const num=item.getAttribute('data-cross')-1
                    const descr=items[num].querySelector(".questions-item__descr")
                    descr.classList.remove("questions-item__descr_active")
                }}
                )
           i.classList.toggle("questions-item__cross_active")
           const descr=items[num].querySelector(".questions-item__descr")
           descr.classList.toggle("questions-item__descr_active")
        })
    })
}
export default questions;