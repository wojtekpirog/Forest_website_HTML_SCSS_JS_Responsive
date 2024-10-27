import { sliderCarousel, testimonialTemplate, cardWidth } from "../main.js";
import testimonials from "../data/testimonials.js";

let isDragging = false;
// The position of the cursor on the slider
let cursorPosition;
// The position of the scroll on the slider
let initialScrollLeft;

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

export const startDragging = (event) => {
  isDragging = true;
  sliderCarousel.classList.add("testimonials__slider-list--dragging");
  // Record the initial position of the cursor:
  cursorPosition = event.pageX;
  // Record the initial position of the scroll:
  initialScrollLeft = sliderCarousel.scrollLeft;
}

export const stopDragging = () => {
  isDragging = false;
  sliderCarousel.classList.remove("testimonials__slider-list--dragging");
}

export const dragSlider = (event) => {
  if (!isDragging) return;
  sliderCarousel.scrollLeft = initialScrollLeft - (cursorPosition - event.pageX);
}

export const changeSlide = (event) => {
  console.log(event.currentTarget);

  event.currentTarget.classList[1] === "testimonials__slider-button--prev"
    ? sliderCarousel.scrollLeft -= cardWidth
    : sliderCarousel.scrollLeft += cardWidth;

  console.log(sliderCarousel.scrollLeft);  
}

export default renderSlider;

// export const renderSlider = () => {
//   // Render a slide for each testimonial in the `testimonials` array:
//   testimonials.forEach((testimonial, index) => {
//     // Get a copy of the HTML document fragment inside the `template` tag:
//     const slideDocumentFragment = testimonialTemplate.content.cloneNode(true);
//     // Get the `testimonials__slide` element from the HTML document fragment:
//     const slide = slideDocumentFragment.querySelector(".testimonials__slide");
//     // Modify the content of the template slide:
//     slide.setAttribute("aria-label", `Slajd numer ${index + 1} z ${testimonials.length}`);
//     slide.querySelector(".testimonials__slide-logo").setAttribute("src", testimonial.logoSource);
//     slide.querySelector(".testimonials__slide-logo").setAttribute("alt", testimonial.logoAltText);
//     slide.querySelector(".testimonials__slide-body-text").textContent = testimonial.quoteText;
//     slide.querySelector(".testimonials__slide-body-rating").setAttribute("aria-label", `Ocena: ${testimonial.stars} gwiazdek na pięć możliwych`);
//     slide.querySelector(".testimonials__slide-body-rating > picture > source").setAttribute("srcset", `./assets/icons/${testimonial.stars}stars.png`);
//     // Get the SVG element for stars from the HTML document fragment:
//     const starsHTML = slide.querySelector(".testimonials__slide-body-rating > picture > svg");
//     // Insert the number of stars equal to `testimonial.stars` into the SVG element for stars:
//     for (let i = 0; i < testimonial.stars; i++) {
//       starsHTML.innerHTML += `<use xlink:href="#star" x="${i * 26}" />`;
//     }
//     // Append slide to the slider container:
//     slider.appendChild(slide);
//   });
//   // Get all slides after rendering:
//   allSlides = document.querySelectorAll(".testimonials__slide");
// }

// export const getSliderWidth = () => {
//   sliderStyle = window.getComputedStyle(slider).getPropertyValue("width");
//   sliderWidth = parseInt(sliderStyle.slice(0, sliderStyle.indexOf("px")));
// }

// export const runSlider = () => {
//   sliderIntervalId = setInterval(handleNextSlide, sliderSpeed);
// }

// export const resetSlider = () => {
//   sliderIndex = 0;
//   getSliderWidth();
//   changeSlide();
// }

// const changeSlide = () => {
//   if (sliderIndex > allSlides.length - 1) {
//     sliderIndex = 0;
//   } else if (sliderIndex < 0) {
//     sliderIndex = allSlides.length - 1;
//   }

//   slider.style.transform = `translateX(-${sliderWidth * sliderIndex}px)`;
// }

// export const handlePrevSlide = () => {
//   sliderIndex -= 1;
//   changeSlide();
//   resetInterval();
// }

// export const handleNextSlide = () => {
//   sliderIndex += 1;
//   changeSlide();
//   resetInterval();
// }

// const resetInterval = () => {
//   clearInterval(sliderIntervalId);
//   runSlider();
// }