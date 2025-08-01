import {
  firstNameInput,
  lastNameInput,
  emailAddressInput,
  contactSelect,
  messageTextarea,
  charsCounter,
  contactFormControls,
  contactFormErrors
} from "../main.js";

const setInitialCharsCounter = () => {
  charsCounter.innerHTML = `<span>${messageTextarea.value.length}</span>/${messageTextarea.maxLength}`;
}

export const handleFormClear = (event) => {
  event.preventDefault();
  // Reset form controls & clear error boxes
  contactFormControls.forEach((input) => {
    input.value = "";
    clearError(input);
  });
  // Reset chars counter
  setInitialCharsCounter();
}

export async function handleFormSubmit(event) {
  // Prevent page reload
  event.preventDefault();
  // Validate form
  const isValid = validateForm();
  // If the form is not valid, return
  if (!isValid) return;
  // Print the result of the form validation
  console.log("Form is valid");
}

const validateForm = () => {
  // This variable holds all form controls, except the select dropdown
  const formControls = [firstNameInput, lastNameInput, emailAddressInput, messageTextarea];
  // Check if all required controls are filled
  checkRequiredControls(formControls);
  // Check if the email address is valid
  checkEmailAddress(emailAddressInput);
  // Check if the select dropdown has a value selected
  checkSelect(contactSelect);
  // Get all error boxes
  const errorBoxesArray = [...contactFormErrors];
  // Get the number of errors and save it in a constant
  const errorCount = errorBoxesArray.filter((errorBox) => errorBox.textContent !== "").length;
  // If there are no errors, return true, otherwise return false
  return errorCount === 0;
}

const checkRequiredControls = (inputs) => {
  inputs.forEach((input) => {
    input.value === "" 
      ? showError(input, "Pole jest wymagane") 
      : clearError(input);
  });
}

const checkEmailAddress = (emailAddressInput) => {
  // Regular expression (regExp) for email
  const regExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  // Check if the email address matches its regular expression
  !regExp.test(emailAddressInput.value)
    ? showError(emailAddressInput, "Adres e-mail jest nieprawidłowy")
    : clearError(emailAddressInput);
}

const checkSelect = (contactSelect) => {
  contactSelect.value === ""
    ? showError(contactSelect, "Wybierz, w jakiej sprawie piszesz")
    : clearError(contactSelect);
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