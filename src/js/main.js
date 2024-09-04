let toggleButton;
let navbarLinksContainer;

const main = () => {
  prepareDOMElements();
  addListeners();
}

const prepareDOMElements = () => {
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
}

document.addEventListener("DOMContentLoaded", main);