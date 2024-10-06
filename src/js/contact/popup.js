import { popupContainer, closePopupButton } from "../main.js";

// Popup-related functions
const handlePopup = () => {
  let errorCount = 0;
  
  const errorsBoxes = document.querySelectorAll(".contact__form-error");
  errorsBoxes.forEach((errorBox) => errorBox.textContent !== "" ? errorCount += 1 : false);

  if (errorCount === 0) {
    openPopup();
  } else {
    closePopup();
  }

  // Zamknij popup po naciśnięciu klawisza ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") closePopup();
  });
}

const openPopup = () => {
  popupContainer.classList.add("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", false);
  closePopupButton.addEventListener("click", closePopup);
}

const closePopup = () => {
  popupContainer.classList.remove("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", true);
}

export default handlePopup;