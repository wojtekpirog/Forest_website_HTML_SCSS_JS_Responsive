import { sliderBox, slider, prevSliderButton, NextSliderButton, allSlides, sliderWidth } from "../main.js";

let sliderSpeed = 3000; // The speed of the slider (3 seconds)
let sliderIndex = 0; // The actual slide index

export const handleSlider = () => {
  sliderIndex++;
  changeSlide();
}

// let runSlider = setInterval(handleSlider, sliderSpeed);

const changeSlide = () => {
  if (sliderIndex > allSlides.length - 1) {
    sliderIndex = 0;
  } else if (sliderIndex < 0) {
    sliderIndex = allSlides.length - 1;
  }

  slider.style.transform = `translateX(-${sliderWidth * sliderIndex}px)`;
}

export const handlePrevSlide = () => {
  sliderIndex--;
  changeSlide();
}

export const handleNextSlide = () => {
  sliderIndex++;
  changeSlide();
}