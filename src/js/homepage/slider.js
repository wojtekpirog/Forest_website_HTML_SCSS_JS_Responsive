import { sliderCarousel, testimonialTemplate, cardWidth } from "../main.js";
import testimonials from "../data/testimonials.js";

let isDragging = false;
// The position of the cursor on the slider
let initialCursorPosition;
// The position of the scroll on the slider
let currentScrollLeft;

let intervalId;

const renderSlider = () => {
  // Render a slide for each testimonial in the array:
  testimonials.forEach((testimonial) => {
    // Get a copy of the HTML document fragment inside the `template` tag:
    const cardDocumentFragment = testimonialTemplate.content.cloneNode(true);
    // Get the `testimonials__slider-card` element from the HTML document fragment:
    const card = cardDocumentFragment.querySelector(".testimonials__slider-list-item");
    // Modify the content of the template card:
    card.setAttribute("aria-label", `Slajd numer ${testimonial.id} z ${testimonials.length}`);
    card.querySelector(".testimonials__slider-card-image").setAttribute("src", testimonial.imageSource);
    card.querySelector(".testimonials__slider-card-image").setAttribute("alt", testimonial.imageAltText);
    card.querySelector(".testimonials__slider-card-text").textContent = testimonial.quoteText;
    card.querySelector(".testimonials__slider-card-fullname").textContent = testimonial.fullName;
    card.querySelector(".testimonials__slider-card-city").textContent = testimonial.city;
    // Append card to the slider:
    sliderCarousel.appendChild(card);
  });
}

export const getCardWidth = () => {
  cardWidth = document.querySelector(".testimonials__slider-card").offsetWidth + 16;
}

export const expandSlider = () => {
  // Get all items of the slider:
  const sliderItems = sliderCarousel.querySelectorAll(".testimonials__slider-list-item");
  // Get an array of all items of the slider:
  const sliderItemsArray = Array.from(sliderItems);
  // Get the number of cards that are visible in the slider:
  const cardsPerView = Math.round(sliderCarousel.offsetWidth / cardWidth);
  // Insert the last number of cards equal to `cardsPerView` into the slider:
  sliderItemsArray.slice(-cardsPerView).reverse().forEach((sliderItem) => {
    sliderCarousel.insertAdjacentHTML("afterbegin", sliderItem.outerHTML);
  });
  // Insert the first number of cards equal to `cardsPerView` into the slider:
  sliderItemsArray.slice(0, cardsPerView).forEach((sliderItem) => {
    sliderCarousel.insertAdjacentHTML("beforeend", sliderItem.outerHTML);
  });
}

export const startDragging = (event) => {
  isDragging = true;
  // Record the initial position of the cursor and the scroll:
  initialCursorPosition = event.pageX;
  currentScrollLeft = sliderCarousel.scrollLeft;

  sliderCarousel.classList.add("testimonials__slider-list--dragging");
}

export const stopDragging = () => {
  isDragging = false;
  sliderCarousel.classList.remove("testimonials__slider-list--dragging");
}

export const dragSlider = (event) => {
  if (!isDragging) return; // Don't execute if the carousel is not being dragged
  sliderCarousel.scrollLeft = currentScrollLeft + (initialCursorPosition - event.pageX);
}

export const changeSlide = (event) => {
  event.currentTarget.classList.contains("testimonials__slider-button--prev")
    ? sliderCarousel.scrollLeft -= cardWidth
    : sliderCarousel.scrollLeft += cardWidth;
}

export const handleAutoplay = () => {
  // Change the slide every 3 seconds
  intervalId = setInterval(() => {
    // sliderCarousel.scrollLeft += cardWidth;
    // If the slider is at the beginning, scroll to the end, and if it is at the end, scroll to the beginning
    if (sliderCarousel.scrollLeft === 0) {
      // sliderCarousel.style.setProperty("scroll-behavior", "auto");
      // sliderCarousel.scrollLeft = sliderCarousel.scrollWidth - (sliderCarousel.offsetWidth * 2);
      // sliderCarousel.style.setProperty("scroll-behavior", "smooth");
      console.log("Alfa");
    } else if (Math.ceil(sliderCarousel.scrollLeft) === sliderCarousel.scrollWidth - sliderCarousel.offsetWidth) {
      // sliderCarousel.style.setProperty("scroll-behavior", "auto");
      // sliderCarousel.scrollLeft = sliderCarousel.offsetWidth;
      // sliderCarousel.style.setProperty("scroll-behavior", "smooth");
      console.log("Omega");
    } 
  }, 5000);
}

export default renderSlider;