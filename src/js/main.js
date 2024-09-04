let toggleButton;
let navbarLinksContainer;
let overlay;

const main = () => {
  prepareDOMElements();
  addListeners();
}

const prepareDOMElements = () => {
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
  overlay = document.querySelector(".overlay");
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  window.addEventListener("resize", () => window.innerWidth >= 992 && closeNavbarMenu());
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("overlay--active");
}

const closeNavbarMenu = () => {
  overlay.classList.remove("overlay--active");
  toggleButton.classList.remove("navbar__burger-icon--active");
  navbarLinksContainer.classList.remove("navbar__links--active");
}

document.addEventListener("DOMContentLoaded", main);