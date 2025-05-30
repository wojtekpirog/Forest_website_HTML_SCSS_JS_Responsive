import setFooterYear from "./footer.js";
import handleScrollSpy from "./homepage/scrollspy.js";
import renderParkCards from "./offer/parks_grid.js";
import runSlider from "./homepage/slider.js";
import renderMap from "./contact/map.js";
import { generateCookieAlert, handleCookieAlert, checkCookie } from "./cookie_alert.js";
import { setInitialCharsCounter, handleFormClear, handleFormSubmit, handleTextarea } from "./contact/form.js";
import { toggleNavbarMenu, closeNavbarMenu } from "./navbar.js"; 

// All sections on the page that need to be spied on when scrolling
export let scrollSpySections;
// Navbar
export let navbar;
export let toggleButton;
export let navbarLinksContainer;
export let navbarLinks;
// Navbar overlay
export let overlay;
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
// Cookie alert
export let cookieAlertBox;
let cookieAcceptButton;
// Grid container for park-related cards
export let parkCardsGrid;
// HTML template for a park-related card
export let parkCardTemplate;
// Box for the map
export let mapBox;
// Current page:
const currentPage = document.body.dataset.currentPage; // np. "home"

// Object containing actions to be executed depending on the page the script is running on
const pageActions = {
  home: () => { // Action when `currentPage === "home"`
    handleScrollSpy();
    runSlider();
  },
  offer: () => { // Action when `currentPage === "offer"`
    renderParkCards();
  },
  contact: () => { // Action when `currentPage === "contact"`
    renderMap();
    setInitialCharsCounter();
  }
};

const main = () => {
  generateCookieAlert(); 
  prepareDOMElements();
  addListeners();
  checkCookie();
  setFooterYear();

  if (pageActions[currentPage]) {
    pageActions[currentPage]();
  }
}

const prepareDOMElements = () => {
  navbar = document.querySelector(".navbar");
  toggleButton = document.querySelector(".navbar__burger");
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
  scrollSpySections = document.querySelectorAll(".page-section--scrollspy");
  // All input elements inside the contact form
  contactFormControls = document.querySelectorAll(".contact__form-input");
  // Popup container
  popupContainer = document.querySelector(".form-popup__container");
  closePopupButton = document.querySelector(".form-popup__close-button");
  // Cookie alert
  cookieAlertBox = document.querySelector(".cookie-alert");
  cookieAcceptButton = document.querySelector(".cookie-alert__button");
  // Grid container for park-related cards
  parkCardsGrid = document.querySelector(".parks__grid");
  // HTML template for a park-related card
  parkCardTemplate = document.querySelector(".parks__template"); 
  // Box for the map
  mapBox = document.querySelector(".map__box");
}

const addListeners = () => {
  cookieAcceptButton.addEventListener("click", handleCookieAlert);
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);
  navbarLinks.forEach((navbarLink) => navbarLink.addEventListener("click", closeNavbarMenu));
  
  if (currentPage === "contact") {
    messageTextarea.addEventListener("input", handleTextarea); 
    resetButton.addEventListener("click", handleFormClear);
    submitButton.addEventListener("click", handleFormSubmit); 
  }

  window.addEventListener("resize", () => window.innerWidth >= 768 ? closeNavbarMenu() : false);
}

document.addEventListener("DOMContentLoaded", main);