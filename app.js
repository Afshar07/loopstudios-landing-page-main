const burger = document.querySelector(".hamburger");
const closeburger = document.querySelector(".close-burger");
const nav = document.querySelector(".navmenu");

burger.addEventListener("click", function(){
    nav.classList.add("open");
});
closeburger.addEventListener("click", function(){
    nav.classList.remove("open");
})