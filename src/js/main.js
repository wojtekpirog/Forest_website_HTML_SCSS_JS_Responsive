import handleScrollSpy from "./homepage/scrollspy.js";
import handleCounterAnimation from "./homepage/counter.js";
import runSlider from "./homepage/slider.js";
import handleScrollToTop, { scrollToTop } from "./homepage/scroll-to-top-button.js"; 
import handleAccordionQuestions, { closeAccordionOutside } from "./homepage/accordion.js";
import renderParkCards from "./offer/parks_grid.js";
import renderMap from "./contact/map.js";
import generateCookieAlert, { handleCookieAlert, checkCookie } from "./cookie_alert.js";
import setInitialCharsCounter, { handleFormClear, handleFormSubmit, handleTextarea } from "./contact/form.js";
import toggleNavbarMenu, { closeNavbarMenu } from "./navbar.js"; 
import { showTooltip, hideTooltip } from "./tooltip.js";
import setFooterYear from "./footer.js"; 

// All scroll-spy sections on the homepage that need to be spied on when scrolling
export let scrollSpySections;
// Section with stats on the homepage (has to be spied on when scrolling)
export let statsSection;
// All counters in the stats section
export let counters;
// Scroll-to-the-top button
export let scrollToTopButton; 
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
// Footer year
export let footerYear;
// Social links inside the footer
let footerSocialLinks;
// Contact form
export let contactForm;
// All input elements inside the contact form
export let contactFormControls;
// All boxes for error messages inside the contact form
export let contactFormErrors;
// Popup
export let popupContainer;
export let closePopupButton;
// Cookie alert
let cookieAcceptButton;
export let cookieAlertBox;
// FAQ accordion
let faqAccordion;
let faqAccordionQuestions;
export let faqAccordionAnswers;
// Grid container for park-related cards
export let parkCardsGrid;
// HTML template for a park-related card
export let parkCardTemplate;
// Box for the map
export let mapBox;
// Current page:
const currentPage = document.body.dataset.currentPage; 

// Object containing actions to be executed depending on the page the script is running on
const pageActions = {
  home: () => { // Action when `currentPage === "home"`
    handleScrollSpy();
    handleCounterAnimation();
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
  // All scroll-spy sections on the homepage that need to be spied on when scrolling
  scrollSpySections = document.querySelectorAll(".page-section--scrollspy");
  // Section with stats on the homepage (has to be spied on when scrolling)
  statsSection = document.querySelector(".stats");
  // All counters in the stats section
  counters = document.querySelectorAll(".stats__item-number > span");
  // Scroll-to-the-top button
  scrollToTopButton = document.querySelector(".scroll-to-top-button");
  // Navbar
  navbar = document.querySelector(".navbar");
  toggleButton = document.querySelector(".navbar__burger");
  navbarLinksContainer = document.querySelector(".navbar__links");
  navbarLinks = document.querySelectorAll(".navbar__link");
  // Overlay
  overlay = document.querySelector(".navbar__overlay");
  // Footer year
  footerYear = document.querySelector(".footer__copyright-year");
  // Social links inside the footer
  footerSocialLinks = document.querySelectorAll(".footer__socials-link");
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
  // Contact form
  contactForm = document.querySelector(".contact__form");
  // All input elements inside the contact form
  contactFormControls = document.querySelectorAll(".contact__form-input");
  // All boxes for error messages inside the contact form
  contactFormErrors = document.querySelectorAll(".contact__form-error");
  // Popup container
  popupContainer = document.querySelector(".form-popup__container");
  closePopupButton = document.querySelector(".form-popup__close-button");
  // Cookie alert
  cookieAlertBox = document.querySelector(".cookie-alert");
  cookieAcceptButton = document.querySelector(".cookie-alert__button");
  // FAQ accordion
  faqAccordion = document.querySelector(".faq__accordion");
  faqAccordionQuestions = document.querySelectorAll(".faq__accordion-question");
  faqAccordionAnswers = document.querySelectorAll(".faq__accordion-answer");
  // Grid container for park-related cards
  parkCardsGrid = document.querySelector(".parks__grid");
  // HTML template for a park-related card
  parkCardTemplate = document.querySelector(".parks__template"); 
  // Box for the map 
  mapBox = document.querySelector(".map__box"); 
}

const addListeners = () => {
  // Events for the homepage
  if (currentPage === "home") {
    faqAccordionQuestions.forEach((question) => question.addEventListener("click", handleAccordionQuestions));
    scrollToTopButton.addEventListener("click", scrollToTop);
  }
  // Events for the contact page
  if (currentPage === "contact") {
    messageTextarea.addEventListener("input", handleTextarea);
    resetButton.addEventListener("click", handleFormClear);
    contactForm.addEventListener("submit", handleFormSubmit);
  }
  // Events for all pages on the website
  overlay.addEventListener("click", closeNavbarMenu);
  cookieAcceptButton.addEventListener("click", handleCookieAlert);
  toggleButton.addEventListener("click", toggleNavbarMenu);
  navbarLinks.forEach((navbarLink) => navbarLink.addEventListener("click", closeNavbarMenu));
  // Events for social media links in the page footer
  const showEvents = ["mouseover", "focus"];
  const hideEvents = ["mouseout", "blur"];

  footerSocialLinks.forEach((socialLink) => {
    showEvents.forEach((showEvent) => socialLink.addEventListener(showEvent, showTooltip));
    hideEvents.forEach((hideEvent) => socialLink.addEventListener(hideEvent, hideTooltip));
  });
  // Events for the `window` global object
  window.addEventListener("click", closeAccordionOutside);
  window.addEventListener("scroll", handleScrollToTop);
  window.addEventListener("resize", () => window.innerWidth >= 768 ? closeNavbarMenu() : false);
}

document.addEventListener("DOMContentLoaded", main);