import { navbarLinksContainer, toggleButton, overlay } from "./main.js";

const toggleNavbarMenu = () => {
  if (toggleButton.classList.contains("navbar__burger--active")) {
    toggleButton.classList.remove("navbar__burger--spring", "navbar__burger--active");
  } else {
    toggleButton.classList.add("navbar__burger--spring", "navbar__burger--active");
  }

  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("navbar__overlay--active");

  if (navbarLinksContainer.classList.contains("navbar__links--active")) {
    document.body.classList.add("no-scroll");
    toggleButton.setAttribute("aria-expanded", "true");
    toggleButton.setAttribute("aria-label", "Zamknij menu nawigacyjne");
  } else {
    document.body.classList.remove("no-scroll");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Otwórz menu nawigacyjne");
  }
}

export const closeNavbarMenu = () => {
  document.body.classList.remove("no-scroll");
  overlay.classList.remove("navbar__overlay--active");
  toggleButton.classList.remove("navbar__burger--spring", "navbar__burger--active");
  navbarLinksContainer.classList.remove("navbar__links--active");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Otwórz menu nawigacyjne");
}

export default toggleNavbarMenu;