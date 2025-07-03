import { faqAccordionAnswers } from "../main.js";

const handleAccordionQuestions = (event) => {
  const questionButton = event.currentTarget;
  const answerContainer = questionButton.nextElementSibling;
  
  if (answerContainer.classList.contains("faq__accordion-answer--open")) {
    closeAnswer(answerContainer, questionButton);
  } else {
    closeOpenAnswers();
    openAnswer(answerContainer, questionButton);
  }
}

const openAnswer = (answerContainer, questionButton) => {
  // Show answer visually
  answerContainer.classList.add("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "false");
  questionButton.setAttribute("aria-expanded", "true");
  // Get chevron icon's container
  const chevronIcon = questionButton.querySelector(".faq__accordion-icon");
  // Replace the `chevron-down` icon with the `chevron-up` icon when opening the answer box
  chevronIcon.setAttribute("src", "./assets/icons/chevron-up.png");
  chevronIcon.previousElementSibling.setAttribute("srcset", "./assets/icons/chevron-up.svg");
  // Add a click event handler
  answerContainer.addEventListener("click", () => questionButton.focus());
  // Add a non-standard property to `answerContainer` to associate answer with its corresponding question
  answerContainer._linkedButton = questionButton;
}

const closeAnswer = (answerContainer, questionButton) => {
  // Hide answer visually
  answerContainer.classList.remove("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "true");
  questionButton.setAttribute("aria-expanded", "false");
  // Get chevron icon's container
  const chevronIcon = questionButton.querySelector(".faq__accordion-icon");
  // Replace the `chevron-up` icon with the `chevron-down` icon when closing the answer box
  chevronIcon.setAttribute("src", "./assets/icons/chevron-down.png");
  chevronIcon.previousElementSibling.setAttribute("srcset", "./assets/icons/chevron-down.svg");
  // Create a deep copy of `answerContainer` (replace it with its deep copy) & remove eventListener from the original `answerContainer`
  answerContainer.replaceWith(answerContainer.cloneNode(true));
}

const closeOpenAnswers = () => {
  faqAccordionAnswers.forEach((answer) => {
    // If any answer is open, close it
    if (answer.classList.contains("faq__accordion-answer--open")) {
      // Get answer's corresponding question button and save it in a constant
      const question = answer.previousElementSibling;
      const linkedButton = answer._linkedButton;
      // If the answer has a linked question button, remove eventListener from answer
      if (linkedButton) {
        answer.removeEventListener("click", () => linkedButton.focus());
        delete answer._linkedButton;
      }
      // Hide answer visually
      answer.classList.remove("faq__accordion-answer--open");
      answer.setAttribute("aria-hidden", "true");
      question.setAttribute("aria-expanded", "false");
      // Get chevron icon's container
      const chevronIcon = question.querySelector(".faq__accordion-icon");
      // Replace the `chevron-up` icon with the `chevron-down` icon when closing the answer box
      chevronIcon.setAttribute("src", "./assets/icons/chevron-down.png");
      chevronIcon.previousElementSibling.setAttribute("srcset", "./assets/icons/chevron-down.svg");
    }
  });
}

export const closeAccordionOutside = (event) => {
  event.target.classList.contains("faq__accordion-question") ||
  event.target.classList.contains("faq__accordion-icon") ||
  event.target.classList.contains("faq__accordion-answer") ||
  event.target.classList.contains("faq__accordion-text")
    ? false
    : closeOpenAnswers()
  ;
}

export default handleAccordionQuestions;