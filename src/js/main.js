import setFooterYear from "./footer.js";
import handleScrollSpy from "./homepage/scrollspy.js";
import renderParkCards from "./offer/parks_grid.js";
import renderMap from "./contact/map.js";
import renderSlider, { getCardWidth, startDragging, stopDragging, dragSlider, changeSlide } from "./homepage/slider.js";
// import { renderSlider, getSliderWidth, runSlider, resetSlider, handlePrevSlide, handleNextSlide } from "./homepage/slider.js";
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
// Slider with testimonials
export let sliderCarousel;
// HTML template for a testimonial
export let testimonialTemplate;
// Other slider-related elements
export let sliderButtons;
// Grid container for park-related cards
export let parkCardsGrid;
// HTML template for a park-related card
export let parkCardTemplate;

// Map box
export let mapBox;

// `offsetHeight` of the navbar 
export let navbarHeight;
// Width of the slider (as a number)
export let cardWidth;

const main = () => {
  generateCookieAlert(); 
  prepareDOMElements();
  addListeners();
  checkCookie();
  setFooterYear();
  // Execute this code only on the "Home" page
  if (document.body.dataset.currentPage === "home") {
    handleScrollSpy();
    renderSlider();
    getCardWidth();
    // runSlider();
  }
  // Execute this code only on the "Offer" page
  if (document.body.dataset.currentPage === "offer") {
    renderParkCards();
  }
  // Execute this code only on the "Contact" page
  if (document.body.dataset.currentPage === "contact") {
    renderMap();
    setInitialCharsCounter();
  }
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
  scrollSpySections = document.querySelectorAll(".page-section--scrollspy");
  // All input elements inside the contact form
  contactFormControls = document.querySelectorAll(".contact__form-input");
  // Popup container
  popupContainer = document.querySelector(".form-popup__container");
  closePopupButton = document.querySelector(".form-popup__close-button");
  // Cookie alert
  cookieAlertBox = document.querySelector(".cookie-alert");
  cookieAcceptButton = document.querySelector(".cookie-alert__button");
  // Slider
  sliderCarousel = document.querySelector(".testimonials__slider-carousel");
  // HTML template for a testimonial
  testimonialTemplate = document.querySelector(".testimonials__slider-template");
  // Other slider-related elements
  sliderButtons = document.querySelectorAll(".testimonials__slider-button");
  // Grid container for park-related cards
  parkCardsGrid = document.querySelector(".parks__grid");
  // HTML template for a park-related card
  parkCardTemplate = document.querySelector(".parks__template");
  // Map box
  mapBox = document.querySelector(".map__box");

  navbarHeight = navbar.offsetHeight;
}

const addListeners = () => {
  cookieAcceptButton.addEventListener("click", handleCookieAlert);
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu); 

  // if (document.body.dataset.currentPage === "home") {
    // prevSliderButton.addEventListener("click", handlePrevSlide);
    // nextSliderButton.addEventListener("click", handleNextSlide);
    //window.addEventListener("resize", resetSlider);
  // }

  if (document.body.dataset.currentPage === "home") {
    sliderCarousel.addEventListener("mousedown", startDragging);
    sliderCarousel.addEventListener("mouseup", stopDragging);
    sliderCarousel.addEventListener("mousemove", dragSlider);
    sliderButtons.forEach((sliderButton) => sliderButton.addEventListener("click", changeSlide));
  }
  
  if (document.body.dataset.currentPage === "contact") {
    messageTextarea.addEventListener("input", handleTextarea);
    resetButton.addEventListener("click", handleFormClear);
    submitButton.addEventListener("click", handleFormSubmit);
  }

  window.addEventListener("resize", () => window.innerWidth >= 992 ? closeNavbarMenu() : false);
}

document.addEventListener("DOMContentLoaded", main);