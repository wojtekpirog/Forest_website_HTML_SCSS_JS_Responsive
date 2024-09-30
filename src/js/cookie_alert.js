import { cookieAlertBox } from "./main.js";

export const generateCookieAlert = () => {
  const cookieAlertHTML = `
    <!-- Cookie alert -->
      <div class="cookie-alert" role="alert" aria-label="Informacja o plikach cookies">
        <!-- Container -->
        <div class="container">
          <!-- Cookie alert heading -->
          <h2 class="cookie-alert__heading">Szanujemy Twoją prywatność</h2> 
          <!-- Cookie alert heading -->
          <!-- Cookie alert message -->
          <p class="cookie-alert__message">W celu zapewnienia podstawowych funkcji witryny, umożliwienia prawidłowej komunikacji oraz analizy ruchu w Internecie, firma Forest Group Ltd. wykorzystuje pliki cookies.</p>
          <p class="cookie-alert__message">Kliknij "<b>Akceptuję</b>", aby wyrazić zgodę na przetwarzanie Twoich danych osobowych, takich jak Twoje imię i nazwisko oraz adres e-mail w celu zapewnienia płynnej komunikacji między Tobą a firmą Forest Group Ltd.</p>
          <p class="cookie-alert__message">Administratorem Twoich danych osobowych jest Forest Group Ltd. Masz możliwość zmiany ustawień dotyczących plików cookies w swojej przeglądarce. Więcej informacji znajdziesz w naszej <a href="#" class="cookie-alert__link" target="_blank" rel="noopener noreferrer">polityce prywatności</a>.</p>
          <!-- Cookie alert message -->
          <!-- Cookie alert button -->
          <button type="button" class="cookie-alert__button" aria-label="Zaakceptuj użycie plików cookies i kontynuuj przeglądanie strony">Akceptuję</button>
          <!-- Cookie alert button -->
        </div> 
        <!-- Container -->
      </div> 
    <!-- Cookie alert -->
  `;

  document.body.insertAdjacentHTML("afterbegin", cookieAlertHTML);
}

export const checkCookie = () => {
  const cookieAccepted = localStorage.getItem("cookieAccepted");

  if (cookieAccepted === "true") {
    cookieAlertBox.remove();
  } else {
    cookieAlertBox.setAttribute("tabindex", "-1");
    cookieAlertBox.focus();
  }
}

export const handleCookieAlert = () => {
  localStorage.setItem("cookieAccepted", "true");
  cookieAlertBox.remove();
}