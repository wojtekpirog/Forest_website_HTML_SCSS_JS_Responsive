import { scrollSpySections, navbarLinks, navbarHeight, aboutBanner } from "../main.js";

const handleScrollSpy = () => {
  const matchingSections = [];

  scrollSpySections.forEach((scrollSpySection) => {

    if (window.scrollY <= scrollSpySection.offsetHeight + scrollSpySection.offsetTop - navbarHeight) {
      matchingSections.push(scrollSpySection);

      const linkToActiveSection = document.querySelector(`a[href*="${matchingSections[0].id}"]`);
      
      navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
      linkToActiveSection.classList.add("navbar__link--active");
    }

    if (window.scrollY >= aboutBanner.offsetTop - navbarHeight) {
      navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("navbar__link--active"));
      document.querySelector('a[href*="offer"]').classList.add("navbar__link--active");
    }

  });
}

export default handleScrollSpy;