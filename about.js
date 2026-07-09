const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const icon = document.querySelector(".menu-toggle i");

toggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});