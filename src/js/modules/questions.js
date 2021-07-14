const questions=()=>{
    const items=document.querySelectorAll(".questions-item");
    items.forEach((i)=>{
        i.addEventListener("click", (e)=>{
            if(!e.target.classList.contains("questions-item__descr")){
                if(i.classList.contains("questions-item_active")){
                    i.classList.remove("questions-item_active")
                }else{
                    items.forEach(item=>item.classList.remove("questions-item_active"))
                    i.classList.add("questions-item_active")
                }
            }
        })
    })
}
export default questions;