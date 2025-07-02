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
  // Show answer
  answerContainer.classList.add("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "false");
  questionButton.setAttribute("aria-expanded", "true");
  // Add a click event handler
  answerContainer.addEventListener("click", () => questionButton.focus());
  // Add a non-standard property to `answerContainer` to associate answer with its corresponding question
  answerContainer._linkedButton = questionButton;
}

const closeAnswer = (answerContainer, questionButton) => {
  // Hide answer
  answerContainer.classList.remove("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "true");
  questionButton.setAttribute("aria-expanded", "false");
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