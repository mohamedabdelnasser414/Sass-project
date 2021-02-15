const navToggle = document.querySelector(".navbar-bars");
const navBar = document.querySelector(".navbar");
const navMenu= document.querySelector(".navbar-menu");


navToggle.addEventListener("click", ()=>{
    if(navToggle.classList.contains("active")){
        navToggle.classList.remove("active");
        navToggle.innerHTML = '<i class="fas fa-times"></i>';
        navMenu.classList.add("show");
        navBar.classList.add("move-down");   
    }else{
        navToggle.classList.add("active");
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navMenu.classList.remove("show");
        navBar.classList.remove("move-down");
    }
})