const drop=(inputSelector, parentSelector)=>{
    const input=document.querySelector(inputSelector);
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(i=>{
        input.addEventListener(i, preventDefault, false)
    })
    function preventDefault(e){
        e.preventDefault();
        e.stopPropagation();
    }
    function backlight(item){
        const back=item.closest(parentSelector)
        back.style.border="1px solid #FFFFFF"
        back.style.background="#7c7c7c"
    }
    function stopBacklight(item){
        const back=item.closest(parentSelector)
        back.style.border="1px dashed #FFFFFF"
        back.style.background="#161616"
    }
    ['dragenter', 'dragover'].forEach(i=>{
        input.addEventListener(i, ()=>{backlight(input)})
    });
    ['dragleave', 'drop'].forEach(i=>{
        input.addEventListener(i, ()=>{stopBacklight(input)})
    });
    input.addEventListener("drop", (e)=>{
        input.files=e.dataTransfer.files;
        let dots;
        const arr = input.files[0].name.split('.');
        arr[0].length > 6 ? dots = "..." : dots = '.';
        const name = arr[0].substring(0, 6) + dots + arr[1];
        input.previousElementSibling.textContent = name;
    })
}
export default drop;