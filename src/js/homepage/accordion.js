import { faqAccordion, faqAccordionQuestions, faqAccordionAnswers } from "../main.js";

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
  answerContainer.classList.add("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "false");
  questionButton.setAttribute("aria-expanded", "true");
}

const closeAnswer = (answerContainer, questionButton) => {
  answerContainer.classList.remove("faq__accordion-answer--open");
  answerContainer.setAttribute("aria-hidden", "true");
  questionButton.setAttribute("aria-expanded", "false");
}

const closeOpenAnswers = () => {
  faqAccordionAnswers.forEach((answer) => {
    if (answer.classList.contains("faq__accordion-answer--open")) {
      answer.classList.remove("faq__accordion-answer--open");
      answer.setAttribute("aria-hidden", "true");
      answer.previousElementSibling.setAttribute("aria-expanded", "false");
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