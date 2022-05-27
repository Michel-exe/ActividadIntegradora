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
document.getElementById("downLoad").addEventListener("click", ()=>{
    document.querySelector("dialog").classList.toggle("act");
})
document.getElementById("cancel").addEventListener("click", ()=>{
    document.querySelector("dialog").classList.toggle("act");
})
document.getElementById("download2").addEventListener("click", ()=>{
    document.querySelector("dialog").classList.toggle("act");
})
document.querySelectorAll(".modulos section div").forEach(modulo =>{
    modulo.addEventListener("click", e=>{
        let t=e.target;
        const cont = (
            (t.tagName=="H2" || t.tagName=="svg") 
             ? t.parentNode : t.tagName=="DIV" ? t :
              t.parentNode.parentNode );

        let msj= cont.lastElementChild;

        let men={
            finanzas: "En este módulo usted: \nPodrá saber su estado de cuenta además de que podrá abonar o retirar dinero 💲🤑.",
            registro: "En este módulo usted: \nAquí se registraran las personas que quieran entrar al condominio con el número de habitación a la que entraran. 💵",
            cuotas:   "En este módulo usted: \nAquí pondrá escoger si desea un mantenimiento instalación o reparación dependiendo de la empresa que quiera contratar o el costo de su habitación de eso dependerá el precio. 🚧",
            ingreso:  "En este módulo usted: \nAquí las personas necesitan ingresar un usuario y contraseña para que puedan acceder. 🚶‍♀️",
            evento:   "En este módulo usted: \nAquí las personas pueden reservar la fecha de algún evento. 🎉",
            agua:     "En este módulo usted: \nPodrá cotizar los pagos de agua y luz que ha generado además de pagarlo con la app. 🌊⚡",
        }
        alert(
            msj.innerHTML.includes("Finanzas") ? men.finanzas :
            msj.innerHTML.includes("Registro") ? men.registro :
            msj.innerHTML.includes("mantenimiento") ? men.cuotas :
            msj.innerHTML.includes("Ingreso") ? men.ingreso :
            msj.innerHTML.includes("Eventos") ? men.evento : men.agua
        )
    })
})
window.addEventListener("submit", e=>{
    e.preventDefault();
    alert("Correo Enviado")
})
