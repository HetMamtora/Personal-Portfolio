const dayNight = document.querySelector(".dayNight");
const banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

const typingEffect = new Typed("#text",{
    strings:["Het.Mamtora","Full-Stack Developer","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})