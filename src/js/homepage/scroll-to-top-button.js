import { scrollToTopButton } from "../main.js";

const totalScrollHeight = document.documentElement.scrollHeight;

const handleScrollToTop = () => {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;
  // Get the current scroll height
  const currentScrollHeight = document.documentElement.clientHeight;
  // Get the maximum possible scroll height
  const maxScrollY = totalScrollHeight - currentScrollHeight;
  // Get the current scroll percentage
  const scrollPercentage = Math.round((currentScrollPosition / maxScrollY) * 100);
  // If the scroll percentage is greater than 50, show the button, otherwise hide it
  if (scrollPercentage > 50) {
    scrollToTopButton.classList.remove("scroll-to-top-button--hidden")
    scrollToTopButton.setAttribute("aria-hidden", "false");
  } else {
    scrollToTopButton.classList.add("scroll-to-top-button--hidden");
    scrollToTopButton.setAttribute("aria-hidden", "true");
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

export default handleScrollToTop;