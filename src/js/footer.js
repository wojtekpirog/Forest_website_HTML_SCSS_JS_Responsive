import footerYear from "./main.js";

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

export default setFooterYear;