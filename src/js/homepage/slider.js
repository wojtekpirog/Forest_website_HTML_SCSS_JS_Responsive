import {sliderCarousel, testimonialTemplate, cardWidth} from "../main.js";
import testimonials from "../data/testimonials.js";

let intervalId;

const renderSlider = () => {
  // Render a slide for each testimonial in the array:
  testimonials.forEach((testimonial) => {
    // Get a copy of the HTML document fragment inside the `template` tag:
    const documentFragment = testimonialTemplate.content.cloneNode(true);
    // Get the testimonial's card element from the document fragment:
    const card = documentFragment.querySelector(".testimonials__slider-list-item");
    // Fill the content of the template card with its relevant information:
    card.setAttribute("aria-label", `Slajd numer ${testimonial.id} z ${testimonials.length}`);
    card.querySelector(".testimonials__slider-card-image").setAttribute("src", testimonial.imageSource);
    card.querySelector(".testimonials__slider-card-image").setAttribute("alt", testimonial.imageAltText);
    card.querySelector(".testimonials__slider-card-text").textContent = testimonial.quoteText;
    card.querySelector(".testimonials__slider-card-fullname").textContent = testimonial.fullName;
    card.querySelector(".testimonials__slider-card-city").textContent = testimonial.city;
    // Append the card to the slider:
    sliderCarousel.appendChild(card);
  });
}

export const getCardWidth = () => {
  // Get the width of a single card
  cardWidth = document.querySelector(".testimonials__slider-card").offsetWidth + 16; 
}

export const changeSlide = (event) => {
  event.currentTarget.classList.contains("testimonials__slider-button--prev")
    ? sliderCarousel.scrollLeft -= cardWidth
    : sliderCarousel.scrollLeft += cardWidth;
}

export default renderSlider;