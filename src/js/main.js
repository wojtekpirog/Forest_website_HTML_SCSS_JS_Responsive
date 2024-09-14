let navbar;
let navbarContainer;
let toggleButton;
let navbarLinksContainer;
let navbarLinks;
let overlay;
let footerYear;
// All sections on the page that need to be spied on when scrolling
let allSections; 
// The value of the margin-bottom property of the section element (each section has the same value of the `margin-bottom` property)
// let sectionMarginBottom;
// `offsetHeight` of the navbar
let navbarHeight;

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
  navbarLinks = document.querySelectorAll(".navbar__link");
  overlay = document.querySelector(".navbar__overlay");
  footerYear = document.querySelector(".footer__copyright-year");

  allSections = document.querySelectorAll(".page-section"); // Scrollspy sections

  // sectionMarginBottom = Number(window.getComputedStyle(allSections[0]).getPropertyValue("margin-bottom").slice(0, -2));
  navbarHeight = navbar.offsetHeight;
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  window.addEventListener("resize", () => window.innerWidth >= 992 && closeNavbarMenu());
  window.addEventListener("scroll", handleScrollSpy);
  // window.addEventListener("scroll", handleNavbarThemeChange);
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

const handleScrollSpy = () => {
  // We want the scroll spy to work only on the main page:
  if (document.body.dataset.mainPage === "true") {
    const sections = [];
    
    allSections.forEach((section) => {

      if (window.scrollY <= section.offsetHeight + section.offsetTop - navbarHeight) {
        sections.push(section);
      }

    });

    console.log(sections);
  }
}

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", main);