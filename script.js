const menuToggle = document.querySelector(".menuToggle");
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");


menuToggle.addEventListener("click",()=>{

    menu.classList.toggle("show");
    if(menu.classList.contains("show")){
        hamburger.style.display = "none";
        cross.style.display = "block";
    }
    else{
        hamburger.style.display = "block";
        cross.style.display = "none";
    }
});

