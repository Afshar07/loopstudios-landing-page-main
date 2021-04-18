"use strict";
const burger = document.querySelector(".hamburger");
const closeburger = document.querySelector(".close-burger");
const nav = document.querySelector(".navmenu");
const interactiveImg = document.querySelector(".interactive");
const creations = document.querySelectorAll(".our-creations");

// Hamburger Menu

burger.addEventListener("click", function () {
  nav.classList.add("open");
});
closeburger.addEventListener("click", function () {
  nav.classList.remove("open");
});

// Change the interactive image source on desktop/mobile design

const interactiveSrcChange = (function () {
  if (window.innerWidth > 654) {
    interactiveImg.src = "images/desktop/image-interactive.jpg";
  } else {
    interactiveImg.src = "images/mobile/image-interactive.jpg";
  }
})();

// Change Our Creations Banner src on desktop/mobile design

const bannerSrcChange = (function () {
  if (window.innerWidth > 654) {
    creations.forEach((creation) => {
      creation.src = creation.src.replace("mobile", "desktop");
    });
  } else {
    creations.forEach((creation) => {
      creation.src = creation.src.replace("desktop", "mobile");
    });
  }
})();
