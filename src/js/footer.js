import { footerYear } from "./main.js"; // Zmienna "footerYear" jest eksportowana z pliku "main.js" jako "named export"

const setFooterYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}

export default setFooterYear;