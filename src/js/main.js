// Navbar
let navbar;
let toggleButton;
let navbarLinksContainer;
let navbarLinks;
// Overlay
let overlay;
// `offsetHeight` of navbar
let navbarHeight;
// Contact form controls
let firstNameInput;
let lastNameInput;
// Contact form buttons
let resetButton;
let submitButton;
// Footer
let footerYear;
// All sections on the page that need to be spied on when scrolling
let allSections;
// All input elements inside the contact form
let contactFormControls;

const main = () => {
  prepareDOMElements();
  addListeners();
  setFooterYear();
}

const prepareDOMElements = () => {
  navbar = document.querySelector(".navbar");
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
  navbarLinks = document.querySelectorAll(".navbar__link");
  // Overlay
  overlay = document.querySelector(".navbar__overlay");
  // Footer
  footerYear = document.querySelector(".footer__copyright-year");
  // Contact form controls
  firstNameInput = document.querySelector("#first-name");
  lastNameInput = document.querySelector("#last-name");
  // Contact form buttons
  resetButton = document.querySelector(".contact__form-button--reset");
  submitButton = document.querySelector(".contact__form-button--submit");
  // All sections on the page
  allSections = document.querySelectorAll(".page-section");
  // All input elements inside the contact form
  contactFormControls = document.querySelectorAll(".contact__form-input");

  navbarHeight = navbar.offsetHeight;
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  resetButton.addEventListener("click", handleFormClear);
  submitButton.addEventListener("click", handleFormClear);

  window.addEventListener("resize", () => window.innerWidth >= 992 && closeNavbarMenu());
  window.addEventListener("scroll", handleScrollSpy);
}

const handleFormClear = (event) => {
  event.preventDefault();

  contactFormControls.forEach((input) => input.value = "");
}

const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("navbar__overlay--active");

  if (navbarLinksContainer.classList.contains("navbar__links--active")) {
    toggleButton.setAttribute("aria-expanded", "true");
    toggleButton.setAttribute("aria-label", "Zamknij menu nawigacyjne");
  } else {
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Otwórz menu nawigacyjne");
  }
}

const closeNavbarMenu = () => {
  overlay.classList.remove("navbar__overlay--active");
  toggleButton.classList.remove("navbar__burger-icon--active");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Otwórz menu nawigacyjne");
  navbarLinksContainer.classList.remove("navbar__links--active");
}

const handleScrollSpy = () => {
  // We want the scroll spy to work only on the main page:
  if (document.body.dataset.mainPage === "true") {
    const sections = []; // Sections for which `offsetHeight` + `offsetTop` - navbarHeight <= `window.scrollY`

    allSections.forEach((section) => {
      if (window.scrollY <= section.offsetHeight + section.offsetTop - navbarHeight) {
        sections.push(section);
      }
    });

    allSections.forEach((section) => section.classList.remove("page-section--active"));
    sections[0].classList.add("page-section--active");

    let activeSectionId;
    allSections.forEach((section) => section.classList.contains("page-section--active") && (activeSectionId = section.id));

    navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
    document.querySelector(`.navbar__link[href*="${activeSectionId}"]`).classList.add("navbar__link--active");
  }
}

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", main);