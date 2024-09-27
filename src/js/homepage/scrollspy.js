import { allSections, navbarHeight, navbarLinks } from "../main.js";

const handleScrollSpy = () => {
  // We want the scroll spy to work only on the main page:
  if (document.body.dataset.currentPage === "home") {
    const sections = []; // Sections for which `offsetHeight` + `offsetTop` - navbarHeight <= `window.scrollY`

    allSections.forEach((section) => {
      if (window.scrollY <= section.offsetHeight + section.offsetTop - navbarHeight) {
        sections.push(section);
      }
    });

    allSections.forEach((section) => section.classList.remove("page-section--active"));
    sections[0].classList.add("page-section--active");

    let activeSectionId;
    allSections.forEach((section) => section.classList.contains("page-section--active") && (activeSectionId = section.id));

    navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
    document.querySelector(`.navbar__link[href*="${activeSectionId}"]`).classList.add("navbar__link--active");
  }
}

export default handleScrollSpy;