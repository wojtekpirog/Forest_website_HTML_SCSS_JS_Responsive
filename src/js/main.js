let toggleButton;

const main = () => {
  prepareDOMElements();
  addListeners();
}

const prepareDOMElements = () => {
  toggleButton = document.querySelector(".navbar__burger-icon");
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
}

document.addEventListener("DOMContentLoaded", main);