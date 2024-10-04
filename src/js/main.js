import setFooterYear from "./footer.js";
import handleScrollSpy from "./homepage/scrollspy.js";
import { handleSlider, handlePrevSlide, handleNextSlide } from "./homepage/slider.js";
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
// About banner
export let aboutBanner;
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
// Slider-related variables
export let sliderBox; // .testimonials__slider-box
export let slider; // .testimonials__slider
export let prevSliderButton;
export let nextSliderButton;
export let allSlides;

// `offsetHeight` of the navbar
export let navbarHeight;

// Width of the slider (as a number)
let sliderStyle;
export let sliderWidth;

const main = () => {
  generateCookieAlert();
  prepareDOMElements();
  addListeners();
  setFooterYear();
  checkCookie();
  handleSlider();
  document.body.dataset.currentPage === "contact" ? setInitialCharsCounter() : false;
}

const prepareDOMElements = () => {
  navbar = document.querySelector(".navbar");
  toggleButton = document.querySelector(".navbar__burger-icon");
  navbarLinksContainer = document.querySelector(".navbar__links");
  navbarLinks = document.querySelectorAll(".navbar__link");
  // Overlay
  overlay = document.querySelector(".navbar__overlay");
  // About banner
  aboutBanner = document.querySelector(".about__banner");
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
  // Slider-related variables
  sliderBox = document.querySelector(".testimonials__slider-box");
  slider = document.querySelector(".testimonials__slider");
  prevSliderButton = document.querySelector(".testimonials__slider-button--prev");
  nextSliderButton = document.querySelector(".testimonials__slider-button--next");
  allSlides = document.querySelectorAll(".testimonials__slide");

  navbarHeight = navbar.offsetHeight;
  // Width of the slider (as a number)
  sliderStyle = window.getComputedStyle(slider).getPropertyValue("width");
  sliderWidth = parseInt(sliderStyle.slice(0, sliderStyle.indexOf("px")));
}

const addListeners = () => {
  cookieAcceptButton.addEventListener("click", handleCookieAlert);
  toggleButton.addEventListener("click", toggleNavbarMenu);
  overlay.addEventListener("click", closeNavbarMenu);

  if (document.body.dataset.currentPage === "home") {
    prevSliderButton.addEventListener("click", handlePrevSlide);
    nextSliderButton.addEventListener("click", handleNextSlide);
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