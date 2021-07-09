import mask from "./mask"
import {postData} from "../services/requests"
const forms=()=>{
    const allForms=document.querySelectorAll("form"),
    allInputs=document.querySelectorAll("input"),
    upload=document.querySelectorAll('[name="file"]'),
    check=document.querySelectorAll('[name="check"]'),
    modal=document.querySelector(".contact-modal"),
    modalText=modal.querySelector(".contact-modal__text"),
    cross=modal.querySelector(".contact-modal__cross"),
    validatorInputs=document.querySelectorAll('[data-valid]')
    upload.forEach(input=>{
        input.addEventListener("input", ()=>{
            const fileName=input.files[0].name
            let arrayFromFileName=fileName.split(".")
            let dots;
            arrayFromFileName[0].length>10?dots="...":dots="."
            input.previousElementSibling.textContent=arrayFromFileName[0].substring(0, 10)+dots+arrayFromFileName[1]
        })
    })
    mask(`[name="tel"]`)
    const massages={
        loading:"Loading...",
        done:"We will call you back",
        failed:"Something went wrong",
        spinner:"assets/img/form/spinner.gif",
        ok:"assets/img/form/ok.png",
        failed:"assets/img/form/fail.png"
    };

    const clearInputs=()=>{
        allInputs.forEach(input=>{
            input.value=""
        })
        upload.forEach(input=>input.previousElementSibling.textContent="Файл не выбран")
        check.forEach(i=>{
            i.checked=false
        })
    }
    allForms.forEach(form=>{
        form.addEventListener("submit", (e)=>{
            let errors = false;
            e.preventDefault()
            validatorInputs.forEach(inp => {
                inp.addEventListener('change', () => {
                    inp.style.border = "";
                });
            });
            validatorInputs.forEach(item => {
                    if (item.value.length == 0 || item.value == " ") {
                        item.style.borderBottom = "1px solid red"; 
                         errors=true;
                    } else {
                        item.style.borderBottom = "1px solid #FFFFFF";
                    }
                });


            if(!errors){
            modal.classList.add('contact-modal_active')
            cross.addEventListener("click", ()=>{
                modal.classList.remove('contact-modal_active')
            })
            //создаем блок для трансляции сообщения и картинки в процеесе отправки формы
            let statusImg=document.createElement("img")
            statusImg.classList.add("contact-modal__img")
            modalText.textContent=massages.loading
            statusImg.setAttribute("src", massages.spinner)
            modalText.parentNode.appendChild(statusImg)
            let api="assets/mailer/smart.php"
                const data=new FormData(form)
            postData(api, data)
            .then((data)=>{
                document.body.style.overflow = "hidden"
                statusImg.setAttribute("src", massages.ok)
                modalText.textContent=massages.done
            }).catch(()=>{
                statusImg.setAttribute("src", massages.failed)
                modalText.textContent=massages.failed
            }).finally(()=>{
                clearInputs()
                setTimeout(()=>{
                    modal.classList.remove("contact-modal_active")
                    document.body.style.overflow = ""
                }, 5000)
            })
            }
            
        })
    })
    
}
export default forms