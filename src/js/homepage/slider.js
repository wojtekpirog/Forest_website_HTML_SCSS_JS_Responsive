import { slider, allSlides, sliderStyle, sliderWidth, sliderIntervalId } from "../main.js";

let sliderSpeed = 5000; // The speed of the slider (3 seconds)
let sliderIndex = 0; // The actual slide index

export const getSliderWidth = () => {
  sliderStyle = window.getComputedStyle(slider).getPropertyValue("width");
  sliderWidth = parseInt(sliderStyle.slice(0, sliderStyle.indexOf("px")));
}

export const runSlider = () => {
  sliderIntervalId = setInterval(handleNextSlide, sliderSpeed);
}

export const resetSlider = () => {
  sliderIndex = 0;
  getSliderWidth();
  changeSlide();
}

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
  resetInterval();
}

export const handleNextSlide = () => {
  sliderIndex++;
  changeSlide();
  resetInterval();
}

const resetInterval = () => {
  clearInterval(sliderIntervalId);
  runSlider();
}