let navbar;
let navbarContainer;
let toggleButton;
let navbarLinksContainer;
let overlay;
let footerYear;

let allSections; 

const main = () => {
  prepareDOMElements();
  addListeners();
  setFooterYear();
}

const prepareDOMElements = () => {
  navbar = document.querySelector(".navbar");
  navbarContainer = document.querySelector(".navbar__container");
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
  window.addEventListener("scroll", handleNavbarThemeChange);
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("navbar__overlay--active");

  navbarLinksContainer.classList.contains("navbar__links--active") 
    ? toggleButton.setAttribute("aria-expanded", "true") 
    : toggleButton.setAttribute("aria-expanded", "false");

  navbarLinksContainer.classList.contains("navbar__links--active") && (navbar.classList.remove("navbar--dark"))
}

const closeNavbarMenu = () => {
  overlay.classList.remove("navbar__overlay--active");
  toggleButton.classList.remove("navbar__burger-icon--active");
  navbarLinksContainer.classList.remove("navbar__links--active");
}

const handleNavbarThemeChange = () => {
  const currentSection = window.scrollY;
  const navbarHeight = navbar.offsetHeight;

  allSections.forEach((section) => {
    if (section.classList.contains("page-section--light") && section.offsetTop <= currentSection + navbarHeight) {
      if (!navbarLinksContainer.classList.contains("navbar__links--active")) {
        navbar.classList.add("navbar--dark");
        navbarContainer.classList.add("navbar__container--dark");
      }
    } else if (section.classList.contains("page-section--dark") && section.offsetTop <= currentSection + navbarHeight) {
      navbar.classList.remove("navbar--dark");
      navbarContainer.classList.remove("navbar__container--dark");
    }
  });
}

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", main);