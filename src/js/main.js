import setFooterYear from "./footer.js";
import handleScrollSpy from "./homepage/scrollspy.js";
import { setInitialCharsCounter, handleFormClear, handleFormSubmit, handleTextarea } from "./contact/form.js";
import { toggleNavbarMenu, closeNavbarMenu } from "./navbar.js";

// All sections on the page that need to be spied on when scrolling
export let allSections;
// Navbar
export let navbar;
export let toggleButton;
export let navbarLinksContainer;
export let navbarLinks;
// Overlay
export let overlay;
// `offsetHeight` of navbar
export let navbarHeight;
// Contact form buttons
let resetButton;
let submitButton;
// Contact form controls
export let firstNameInput;
export let lastNameInput;
export let emailAddressInput;
export let contactSelect;
export let messageTextarea;
// Chars counter
export let charsCounter;
// Footer
export let footerYear;
// All input elements inside the contact form
export let contactFormControls;
// Popup
export let popupContainer;
export let closePopupButton;

const main = () => {
  prepareDOMElements();
  addListeners();
  setFooterYear();
  document.body.dataset.currentPage === "contact" ? setInitialCharsCounter() : false;
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
  emailAddressInput = document.querySelector("#email");
  contactSelect = document.querySelector("#reason");
  messageTextarea = document.querySelector("#message");
  // Chars counter
  charsCounter = document.querySelector(".contact__form-counter");
  // Contact form buttons
  resetButton = document.querySelector(".contact__form-button--reset");
  submitButton = document.querySelector(".contact__form-button--submit");
  // All sections on the page
  allSections = document.querySelectorAll(".page-section");
  // All input elements inside the contact form
  contactFormControls = document.querySelectorAll(".contact__form-input");
  // Popup container
  popupContainer = document.querySelector(".form-popup__container");
  closePopupButton = document.querySelector(".form-popup__close-button");

  navbarHeight = navbar.offsetHeight;
}

const addListeners = () => {
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);

  if (document.body.dataset.currentPage === "home") {
    window.addEventListener("scroll", handleScrollSpy);
  }
  
  if (document.body.dataset.currentPage === "contact") {
    messageTextarea.addEventListener("input", handleTextarea);
    resetButton.addEventListener("click", handleFormClear);
    submitButton.addEventListener("click", handleFormSubmit);
  }

  window.addEventListener("resize", () => window.innerWidth >= 992 ? closeNavbarMenu() : false);
}

document.addEventListener("DOMContentLoaded", main);