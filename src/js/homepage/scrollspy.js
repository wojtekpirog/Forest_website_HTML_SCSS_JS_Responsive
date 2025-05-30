import { scrollSpySections, navbarLinks } from "../main.js";

const options = { 
  rootMargin: "-50%"
}

const handleScrollSpy = () => {
  const observer = new IntersectionObserver((entries) => {
    // Loop through each entry
    for (const entry of entries) {
      // Check if the entry intersects the root (which is the entire viewport by default)
      const isIntersecting = entry.isIntersecting;
      // If the entry is intersecting, add the active class to the corresponding navbar link
      if (isIntersecting) {
        navbarLinks.forEach((link) => link.classList.remove("navbar__link--active"));
        document.querySelector(`a[href*="${entry.target.id}"]`).classList.add("navbar__link--active");
      }
    }
  }, options);

  scrollSpySections.forEach((section) => observer.observe(section));
}

export default handleScrollSpy;