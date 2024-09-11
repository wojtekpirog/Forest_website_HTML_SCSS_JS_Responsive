let toggleButton;
let navbarLinksContainer;
let overlay;
let footerYear;

const main = () => {
  prepareDOMElements();
  addListeners();
  setFooterYear();
}

const prepareDOMElements = () => {
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
  overlay = document.querySelector(".navbar__overlay");
  footerYear = document.querySelector(".footer__copyright-year");
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  window.addEventListener("resize", () => window.innerWidth >= 992 && closeNavbarMenu());
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("navbar__overlay--active");

  navbarLinksContainer.classList.contains("navbar__links--active") 
    ? toggleButton.setAttribute("aria-expanded", "true") 
    : toggleButton.setAttribute("aria-expanded", "false");
}

const closeNavbarMenu = () => {
  overlay.classList.remove("navbar__overlay--active");
  toggleButton.classList.remove("navbar__burger-icon--active");
  navbarLinksContainer.classList.remove("navbar__links--active");
}

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", main);