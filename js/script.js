let navHeader = document.querySelector(".header-nav");

navHeader.classList.remove("header-nav--nojs");
navHeader.classList.remove("header-nav--opened");
navHeader.classList.add("header-nav--closed");

let close = document.querySelector(".header-nav__toggle--close");
let open = document.querySelector(".header-nav__toggle--open");

close.addEventListener("click", function() {
  navHeader.classList.remove("header-nav--opened");
  navHeader.classList.add("header-nav--closed");
});

open.addEventListener("click", function() {
  navHeader.classList.remove("header-nav--closed");
  navHeader.classList.add("header-nav--opened");
});




