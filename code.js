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
            finanzas: "En este m贸dulo usted: \nPodr谩 saber su estado de cuenta adem谩s de que podr谩 abonar o retirar dinero 馃挷馃.",
            registro: "En este m贸dulo se registraran: \nLas personas que quieran entrar al condominio con su nombre y el n煤mero de habitaci贸n a la que entraran. 馃挼",
            cuotas:   "En este m贸dulo usted: \nPondr谩 escoger si desea un mantenimiento instalaci贸n o reparaci贸n dependiendo de la empresa que quiera contratar o el costo de su habitaci贸n de eso depender谩 el precio. 馃毀",
            ingreso:  "En este m贸dulo: \nCualquier persona puede ingresar.\nEn caso de ser un inquilino necesita ingresar su nombre y su contrase帽a.\nEn caso de ser alguna visita se necesita registrar, adem谩s que el inquilino le permita el acceso. 馃毝鈥嶁檧锔?",
            evento:   "En este m贸dulo usted: \nPuede reservar la fecha de alg煤n evento. 馃帀",
            agua:     "En este m贸dulo usted: \nPodr谩 cotizar los pagos de agua y luz que ha generado adem谩s de pagarlo con la app. 馃寠鈿?",
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
