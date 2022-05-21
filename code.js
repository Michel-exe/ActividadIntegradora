document.querySelectorAll(".labInputs").forEach(lab =>{
    lab.addEventListener("click",e=>{
        let tar=e.target;
        tar.parentNode.classList.toggle("act")
        tar.nextElementSibling.focus();
    })
})
document.querySelectorAll(".inputs").forEach(inp =>{
    inp.addEventListener("blur",e=>{
        if (e.target.value.length===0){
            e.target.parentNode.classList.remove("act")
        }
    })
})
document.querySelector(".menu section").addEventListener("click", ()=> {
    document.querySelector(".main").classList.toggle("act");
})
