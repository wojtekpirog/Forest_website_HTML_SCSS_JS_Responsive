export const showTooltip = (event) => {
  const link = event.currentTarget;
  const tooltip = link.querySelector(".footer__socials-tooltip");
  
  tooltip.classList.add("footer__socials-tooltip--visible");
  tooltip.setAttribute("aria-hidden", "false");
}

export const hideTooltip = (event) => {
  const link = event.currentTarget;
  const tooltip = link.querySelector(".footer__socials-tooltip");
  
  tooltip.classList.remove("footer__socials-tooltip--visible");
  tooltip.setAttribute("aria-hidden", "true");
}