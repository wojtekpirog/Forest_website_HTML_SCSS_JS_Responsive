import { popupContainer, closePopupButton } from "../main.js";

// const handlePopup = () => {
//   // This variable counts the number of errors within the form
//   let errorCount = 0;
//   // Get all boxes for error messages
//   const errorsBoxes = document.querySelectorAll(".contact__form-error");
//   // If there is an error somewhere in the form, count it
//   errorsBoxes.forEach((errorBox) => errorBox.textContent !== "" ? errorCount += 1 : false);

//   if (errorCount === 0) {
//     openPopup();
//   } else {
//     closePopup();
//   }

//   // Close popup when pressing ESC
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape" || event.key === "Esc") closePopup();
//   });
// }

export const openPopup = () => {
  popupContainer.classList.add("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", false);
  closePopupButton.addEventListener("click", closePopup);
}

export const closePopup = () => {
  popupContainer.classList.remove("form-popup__container--active");
  popupContainer.setAttribute("aria-hidden", true);
}