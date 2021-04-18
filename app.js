const burger = document.querySelector(".hamburger");
const closeburger = document.querySelector(".close-burger");
const nav = document.querySelector(".navmenu");
const interactiveImg = document.querySelector(".interactive");


// Hamburger Menu

burger.addEventListener("click", function(){
    nav.classList.add("open");
});
closeburger.addEventListener("click", function(){
    nav.classList.remove("open");
})



// Change the interactive image source on desktop/mobile design

const imgChange = function(){
    if(window.innerWidth > 654){
        interactiveImg.src = "images/desktop/image-interactive.jpg";
    }else{
        interactiveImg.src = "images/mobile/image-interactive.jpg";
    }
}();