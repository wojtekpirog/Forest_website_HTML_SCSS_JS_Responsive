import {
  firstNameInput,
  lastNameInput,
  emailAddressInput,
  contactSelect,
  messageTextarea,
  charsCounter,
  contactFormControls,
} from "../main.js";
import handlePopup from "./popup.js";

const setInitialCharsCounter = () => {
  charsCounter.innerHTML = `<span>${messageTextarea.value.length}</span>/${messageTextarea.maxLength}`;
}

export const handleFormClear = (event) => {
  event.preventDefault();

  contactFormControls.forEach((input) => {
    input.value = "";
    clearError(input);
  });
}

export const handleFormSubmit = (event) => {
  event.preventDefault();

  checkForm([firstNameInput, lastNameInput, emailAddressInput, messageTextarea]);
  checkEmailAddress(emailAddressInput);
  checkSelect(contactSelect);
  // Form submit simulation
  setTimeout(handlePopup, 1000);
}

const checkForm = (inputs) => {
  inputs.forEach((input) => {
    input.value === "" ? showError(input, `Pole "${input.previousElementSibling.textContent.slice(0, -2)}" nie może być puste`) : clearError(input);
  });
}

const checkEmailAddress = (emailAddressInput) => {
  const regExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
  if (emailAddressInput.value === "") {
    showError(emailAddressInput, 'Pole "Adres e-mail" nie może być puste');
  } else if (!regExp.test(emailAddressInput.value)) {
    showError(emailAddressInput, 'Adres e-mail jest nieprawidłowy');
  } else {
    clearError(emailAddressInput);
  }
}

const checkSelect = (contactSelect) => {
  if (contactSelect.value === "") {
    showError(contactSelect, "Powiedz nam, w jakiej sprawie piszesz");
  } else {
    clearError(contactSelect);
  }
}

export const handleTextarea = () => {
  charsCounter.innerHTML = `<p class="contact__form-counter"><span>${messageTextarea.value.length}</span>/${messageTextarea.maxLength}</p>`;

  if (messageTextarea.value.length === messageTextarea.maxLength) {
    messageTextarea.value = messageTextarea.value.slice(0, messageTextarea.maxLength + 1);
    showError(messageTextarea, `Osiągnięto limit ${messageTextarea.maxLength} znaków.`);
  } else {
    clearError(messageTextarea);
  }
}

const showError = (input, message) => {
  input.style.borderColor = "hsl(0, 100%, 40%)";
  input.parentElement.querySelector(".contact__form-error").textContent = message;
  input.parentElement.querySelector(".contact__form-error").classList.add("contact__form-error--active");
}

const clearError = (input) => {
  input.style.borderColor = "hsl(0, 0%, 25%)";
  input.parentElement.querySelector(".contact__form-error").textContent = "";
  input.parentElement.querySelector(".contact__form-error").classList.remove("contact__form-error--active");
}

export default setInitialCharsCounter;