import { popupContainer, closePopupButton } from "../main.js";

const openPopup = () => {
  popupContainer.classList.add("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", "false");
  closePopupButton.addEventListener("click", closePopup);
}

const closePopup = () => {
  popupContainer.classList.remove("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", "true");
  closePopupButton.removeEventListener("click", closePopup);
}

export default openPopup;