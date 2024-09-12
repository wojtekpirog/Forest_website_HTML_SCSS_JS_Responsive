let toggleButton;
let navbarLinksContainer;
let overlay;
let footerYear;

let allSections;

const main = () => {
  prepareDOMElements();
  addListeners();
  setFooterYear();

  allSections.forEach((section) => {
    console.log(section.offsetTop);
  });
}

const prepareDOMElements = () => {
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
  overlay = document.querySelector(".navbar__overlay");
  footerYear = document.querySelector(".footer__copyright-year");

  allSections = document.querySelectorAll(".page-section");
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  window.addEventListener("resize", () => window.innerWidth >= 992 && closeNavbarMenu());
  window.addEventListener("scroll", handleObserver);
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

const handleObserver = () => {
  const currentSection = window.scrollY;

  allSections.forEach((section) => {
    if (section.classList.contains("page-section--light") && section.offsetTop <= currentSection + 100) {
      console.log("Change navbar theme to dark");
    } else if (section.classList.contains("page-section--dark") && section.offsetTop <= currentSection + 100) {
      console.log("Change navbar theme to light");
    }
  });
}

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", main);