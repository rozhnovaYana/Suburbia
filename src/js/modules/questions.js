const questions=()=>{
    const items=document.querySelectorAll(".questions-item");
    items.forEach((i)=>{
        i.addEventListener("click", (e)=>{
           i.classList.toggle("questions-item_active")
        })
    })
}
export default questions;